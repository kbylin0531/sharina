<?php
/**
 * Repository: https://github.com/kbylin0531/Sharin.git
 * User: Linzh
 * Date: 11/13/16
 * Time: 2:57 PM
 */

namespace Web\System\Sign;

/**
 * Interface SignInterface
 * @method array query(string $sql, array $bind = null)
 * @method int exec(string $sql, array $bind = null)
 *
 * @method bool changePassword($id, $newPassword)
 *
 * @package Sharin\Addon\Sign
 */
interface SignInterface
{
    /**
     * get error while login or other action
     * @return string
     */
    public function error();

    /**
     * sign in with username and password
     * @param string $username
     * @param string $password
     * @return false|array
     */
    public function signIn($username, $password);

    /**
     * sign in with email and password
     * @param string $email
     * @param string $password
     * @return false|array
     */
    public function signInWithEmail($email, $password);

    /**
     * sign in with phone and password
     * @param string $phone
     * @param string $password
     * @return false|array
     */
    public function signInWithPhone($phone, $password);

    /**
     * sign out the current member
     * @return bool
     */
    public function signOut();

    /**
     * sign up an account
     * @param array $fields
     * @return bool
     */
    public function signUp(array $fields);

    /**
     * get last login time and ip of current member
     * @return false|array
     */
    public function getLastLogin();

    /**
     * get login history order by login history des cof current member
     * @return array
     */
    public function getLoginHistory();

}
