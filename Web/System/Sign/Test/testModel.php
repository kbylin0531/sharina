<?php
/**
 * Repository: https://github.com/kbylin0531/Sharin.git
 * User: Linzh
 * Date: 11/13/16
 * Time: 4:04 PM
 */

use Sharin\Addon\Sign\SignModel;

require __DIR__ . '/../../../console.inc';

class SignModelTest extends \PHPUnit\Framework\TestCase
{
    public function testSignIn()
    {
        $model = new SignModel();
        //test basic login
        $passord = md5(sha1('123456'));
        $passord2 = md5(sha1('this is wrong password'));

        $this->assertEquals(true, $model->signIn('admin', $passord));
        $this->assertEquals(false, $model->signIn('admin', $passord2));
    }

    public function testSignInWithEmail()
    {
        $model = new SignModel();
        //test basic login
        $passord = md5(sha1('123456'));
        $this->assertEquals(true, $model->signInWithEmail('784855684@qq.com', $passord));
        $this->assertEquals(false, $model->signInWithEmail('784855684@qq2.com', $passord));
    }

    public function testSignInWithPhone()
    {
        $model = new SignModel();
        //test basic login
        $passord = md5(sha1('123456'));
        $this->assertEquals(true, $model->signInWithPhone('15658070289', $passord));
        $this->assertEquals(false, $model->signInWithPhone('156XXXXX0289', $passord));
    }



}
