<?php
/**
 * Created by PhpStorm.
 * User: linzh
 * Date: 2017/1/9
 * Time: 11:44
 */

namespace Web\OAuth2\Model;


use Sharin\Database\Model;

/**
 * Class OAuthModel
 * @method OAuthModel  getInstance($index = null) static
 * @package Web\OAuth2\Model
 */
class OAuthModel extends Model
{
    private $config = [
        'client_table' => 'oauth_clients',
        'access_token_table' => 'oauth_access_tokens',
        'refresh_token_table' => 'oauth_refresh_tokens',
        'code_table' => 'oauth_authorization_codes',
        'user_table' => 'oauth_users',
        'jwt_table' => 'oauth_jwt',
        'jti_table' => 'oauth_jti',
        'scope_table' => 'oauth_scopes',
        'public_key_table' => 'oauth_public_keys',
    ];

    protected function tableName()
    {
        return '';
    }

    /**
     * 添加客户端
     * @param $id
     * @param $secret
     * @param $url
     * @return bool
     */
    public function addClient($id, $secret, $url)
    {
        $sql = 'INSERT INTO oauth_clients (client_id, client_secret, redirect_uri) VALUES (:id, :secret, :url);';
        return $this->exec($sql, [
            ':id' => $id,
            ':secret' => $secret,
            ':url' => $url,
        ]) ? true : false;
    }


    public function install()
    {
        $sql = "
        CREATE TABLE {$this->config['client_table']} (
          client_id             VARCHAR(80)   NOT NULL,
          client_secret         VARCHAR(80),
          redirect_uri          VARCHAR(2000),
          grant_types           VARCHAR(80),
          scope                 VARCHAR(4000),
          user_id               VARCHAR(80),
          PRIMARY KEY (client_id)
        );

        CREATE TABLE {$this->config['access_token_table']} (
          access_token         VARCHAR(40)    NOT NULL,
          client_id            VARCHAR(80)    NOT NULL,
          user_id              VARCHAR(80),
          expires              TIMESTAMP      NOT NULL,
          scope                VARCHAR(4000),
          PRIMARY KEY (access_token)
        );

        CREATE TABLE {$this->config['code_table']} (
          authorization_code  VARCHAR(40)    NOT NULL,
          client_id           VARCHAR(80)    NOT NULL,
          user_id             VARCHAR(80),
          redirect_uri        VARCHAR(2000),
          expires             TIMESTAMP      NOT NULL,
          scope               VARCHAR(4000),
          id_token            VARCHAR(1000),
          PRIMARY KEY (authorization_code)
        );

        CREATE TABLE {$this->config['refresh_token_table']} (
          refresh_token       VARCHAR(40)    NOT NULL,
          client_id           VARCHAR(80)    NOT NULL,
          user_id             VARCHAR(80),
          expires             TIMESTAMP      NOT NULL,
          scope               VARCHAR(4000),
          PRIMARY KEY (refresh_token)
        );

        CREATE TABLE {$this->config['user_table']} (
          username            VARCHAR(80),
          password            VARCHAR(80),
          first_name          VARCHAR(80),
          last_name           VARCHAR(80),
          email               VARCHAR(80),
          email_verified      BOOLEAN,
          scope               VARCHAR(4000)
        );

        CREATE TABLE {$this->config['scope_table']} (
          scope               VARCHAR(80)  NOT NULL,
          is_default          BOOLEAN,
          PRIMARY KEY (scope)
        );

        CREATE TABLE {$this->config['jwt_table']} (
          client_id           VARCHAR(80)   NOT NULL,
          subject             VARCHAR(80),
          public_key          VARCHAR(2000) NOT NULL
        );

        CREATE TABLE {$this->config['jti_table']} (
          issuer              VARCHAR(80)   NOT NULL,
          subject             VARCHAR(80),
          audience            VARCHAR(80),
          expires             TIMESTAMP     NOT NULL,
          jti                 VARCHAR(2000) NOT NULL
        );

        CREATE TABLE {$this->config['public_key_table']} (
          client_id            VARCHAR(80),
          public_key           VARCHAR(2000),
          private_key          VARCHAR(2000),
          encryption_algorithm VARCHAR(100) DEFAULT 'RS256'
        )";
        return $this->exec($sql);
    }


}