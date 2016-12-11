<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/28
 * Time: 20:37
 */
namespace {

    use Web\Admin\Blog\ActiveRecord\ArticleAR;
    use PHPUnit\Framework\TestCase;

    require __DIR__.'/../../../../Sharin/console.inc';


    class ArticleModelTest extends TestCase {

        public function testCreate(){
            $model = new ArticleAR();


        }


    }


}