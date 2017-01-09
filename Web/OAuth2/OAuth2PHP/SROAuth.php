<?php
/**
 * Created by PhpStorm.
 * User: linzh
 * Date: 2017/1/9
 * Time: 13:30
 */

namespace Web\OAuth2\OAuth2PHP;


use OAuth2;
use PDO;
use PDOException;
use Exception;

require __DIR__ . '/../OAuth2PHP/lib/OAuth2.inc';
require __DIR__ . '/../OAuth2PHP/lib/OAuth2Exception.inc';
define('PDO_DSN', 'mysql:dbname=sharin;host=121.42.60.123');
define('PDO_USER', 'lin');
define('PDO_PASS', 'asusen');

/**
 * Class SROAuth
 * @package Web\OAuth2\OAuth2PHP
 */
class SROAuth extends OAuth2
{

    private $db;

    protected $config = [];

    /**
     * Overrides OAuth2::__construct().
     */
    public function __construct()
    {
        parent::__construct();
        $this->config = [
            'auth_codes' => 'psr_oauth_auth_codes',
            'clients' => 'psr_oauth_clients',
            'tokens' => 'psr_oauth_tokens',
        ];

        try {
            $this->db = new PDO(PDO_DSN, PDO_USER, PDO_PASS);
        } catch (PDOException $e) {
            die('Connection failed: ' . $e->getMessage());
        }
    }

    public function install()
    {
        $sql = "SET SQL_MODE=\"NO_AUTO_VALUE_ON_ZERO\";

CREATE TABLE `{$this->config['auth_codes']}` (
  `code` varchar(40) NOT NULL,
  `client_id` varchar(20) NOT NULL,
  `redirect_uri` varchar(200) NOT NULL,
  `expires` int(11) NOT NULL,
  `scope` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `{$this->config['clients']}` (
  `client_id` varchar(20) NOT NULL,
  `client_secret` varchar(20) NOT NULL,
  `redirect_uri` varchar(200) NOT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `{$this->config['tokens']}` (
  `oauth_token` varchar(40) NOT NULL,
  `client_id` varchar(20) NOT NULL,
  `expires` int(11) NOT NULL,
  `scope` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`oauth_token`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;";
        return $this->db->exec($sql) !== false;
    }

    /**
     * Release DB connection during destruct.
     */
    function __destruct()
    {
        $this->db = NULL; // Release db connection
    }

    /**
     * Handle PDO exceptional cases.
     * @param Exception $e
     */
    private function handleException($e)
    {
        echo "Database error: " . $e->getMessage();
        exit;
    }

    /**
     * Little helper function to add a new client to the database.
     *
     * Do NOT use this in production! This sample code stores the secret
     * in plaintext!
     *
     * @param $client_id
     *   Client identifier to be stored.
     * @param $client_secret
     *   Client secret to be stored.
     * @param $redirect_uri
     *   Redirect URI to be stored.
     */
    public function addClient($client_id, $client_secret, $redirect_uri)
    {
        try {
            $sql = "INSERT INTO {$this->config['clients']} (client_id, client_secret, redirect_uri) VALUES (:client_id, :client_secret, :redirect_uri)";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":client_id", $client_id, PDO::PARAM_STR);
            $stmt->bindParam(":client_secret", $client_secret, PDO::PARAM_STR);
            $stmt->bindParam(":redirect_uri", $redirect_uri, PDO::PARAM_STR);
            $stmt->execute();
        } catch (PDOException $e) {
            $this->handleException($e);
        }
    }

    /**
     * Implements OAuth2::checkClientCredentials().
     *
     * Do NOT use this in production! This sample code stores the secret
     * in plaintext!
     * @param $client_id
     * @param null $client_secret
     * @return bool
     */
    protected function checkClientCredentials($client_id, $client_secret = NULL)
    {
        try {
            $sql = "SELECT client_secret FROM {$this->config['clients']} WHERE client_id = :client_id";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":client_id", $client_id, PDO::PARAM_STR);
            $stmt->execute();

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($client_secret === NULL)
                return $result !== FALSE;

            return $result["client_secret"] == $client_secret;
        } catch (PDOException $e) {
            $this->handleException($e);
        }
        return null;
    }

    /**
     * Implements OAuth2::getRedirectUri().
     * @param $client_id
     * @return mixed
     */
    protected function getRedirectUri($client_id)
    {
        try {
            $sql = "SELECT redirect_uri FROM {$this->config['clients']} WHERE client_id = :client_id";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":client_id", $client_id, PDO::PARAM_STR);
            $stmt->execute();

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($result === FALSE)
                return FALSE;

            return isset($result["redirect_uri"]) && $result["redirect_uri"] ? $result["redirect_uri"] : NULL;
        } catch (PDOException $e) {
            $this->handleException($e);
        }
        return null;
    }

    /**
     * Implements OAuth2::getAccessToken().
     * @param $oauth_token
     * @return mixed
     */
    protected function getAccessToken($oauth_token)
    {
        try {
            $sql = "SELECT client_id, expires, scope FROM {$this->config['tokens']} WHERE oauth_token = :oauth_token";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":oauth_token", $oauth_token, PDO::PARAM_STR);
            $stmt->execute();

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            return $result !== FALSE ? $result : NULL;
        } catch (PDOException $e) {
            $this->handleException($e);
        }
        return null;
    }

    /**
     * Implements OAuth2::setAccessToken().
     * @param $oauth_token
     * @param $client_id
     * @param $expires
     * @param null $scope
     */
    protected function setAccessToken($oauth_token, $client_id, $expires, $scope = NULL)
    {
        try {
            $sql = "INSERT INTO {$this->config['tokens']} (oauth_token, client_id, expires, scope) VALUES (:oauth_token, :client_id, :expires, :scope)";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":oauth_token", $oauth_token, PDO::PARAM_STR);
            $stmt->bindParam(":client_id", $client_id, PDO::PARAM_STR);
            $stmt->bindParam(":expires", $expires, PDO::PARAM_INT);
            $stmt->bindParam(":scope", $scope, PDO::PARAM_STR);

            $stmt->execute();
        } catch (PDOException $e) {
            $this->handleException($e);
        }
    }

    /**
     * Overrides OAuth2::getSupportedGrantTypes().
     */
    protected function getSupportedGrantTypes()
    {
        return array(
            OAUTH2_GRANT_TYPE_AUTH_CODE,
        );
    }

    /**
     * Overrides OAuth2::getAuthCode().
     * @param $code
     * @return mixed
     */
    protected function getAuthCode($code)
    {
        try {
            $sql = "SELECT code, client_id, redirect_uri, expires, scope FROM {$this->config['auth_codes']} WHERE code = :code";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":code", $code, PDO::PARAM_STR);
            $stmt->execute();

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            return $result !== FALSE ? $result : NULL;
        } catch (PDOException $e) {
            $this->handleException($e);
        }
        return null;
    }

    /**
     * Overrides OAuth2::setAuthCode().
     * @param $code
     * @param $client_id
     * @param $redirect_uri
     * @param $expires
     * @param null $scope
     */
    protected function setAuthCode($code, $client_id, $redirect_uri, $expires, $scope = NULL)
    {
        try {
            $sql = "INSERT INTO {$this->config['auth_codes']} (code, client_id, redirect_uri, expires, scope) VALUES (:code, :client_id, :redirect_uri, :expires, :scope)";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":code", $code, PDO::PARAM_STR);
            $stmt->bindParam(":client_id", $client_id, PDO::PARAM_STR);
            $stmt->bindParam(":redirect_uri", $redirect_uri, PDO::PARAM_STR);
            $stmt->bindParam(":expires", $expires, PDO::PARAM_INT);
            $stmt->bindParam(":scope", $scope, PDO::PARAM_STR);

            $stmt->execute();
        } catch (PDOException $e) {
            $this->handleException($e);
        }
    }
}