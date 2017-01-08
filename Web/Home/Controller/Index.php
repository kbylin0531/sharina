<?php
namespace Web\Home\Controller;

use Sharin\Core\Controller\Render;

class Index
{

    use Render;

    public function index()
    {
        $this->assign('entrance', [
            [
                'href' => '/Admin/Index/index',
                'svg' => '<svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                            <path d="M929.686473 448.097598c0 10.04068 0.045025 18.951631-0.007163 27.861558-0.571005 97.706299-31.023574 185.034227-91.894943 261.429151-47.478338 59.585073-107.232257 102.7205-178.420599 129.921002-3.838422 1.465374-6.313799 3.439332-8.205892 7.322779-24.441669 50.13791-64.244186 80.472799-119.187543 89.73679-61.780065 10.42135-125.673258-19.627013-158.301376-73.258491-35.340903-58.090023-31.232328-130.006959 12.249999-182.591595 35.484166-42.910299 82.123392-62.440098 137.723711-56.964386 55.013965 5.412266 95.766111 33.783431 123.170251 81.59332 0.417509 0.731664 0.829901 1.471514 1.293459 2.172479 0.179079 0.270153 0.497327 0.446162 1.555425 1.354857 10.638291-6.764054 21.914102-13.176091 32.383548-20.710694 52.334949-37.674041 88.86391-87.189781 109.312638-148.349723 7.460925-22.311145 12.127202-45.297672 13.570063-68.853158 0.590448-9.619078 0.578168-9.614985 9.739828-12.652158 24.972764-8.27957 49.940412-16.579607 74.91727-24.844851C902.36522 457.036177 915.165758 452.863135 929.686473 448.097598z"
                                  fill="#dbdbdb"></path>
                            <path d="M289.697473 832.104505c-14.874779-10.93812-29.413913-20.779256-43.00342-31.79003-38.822191-31.458479-70.880327-68.870554-96.327906-111.912859-22.50455-38.068014-38.569434-78.678944-48.057529-121.863489-11.545964-52.53961-13.135158-105.381096-4.3951-158.486594 1.370207-8.316409 2.873444-16.628726 4.770653-24.837688 0.785899-3.3984 0.083911-5.641487-2.174526-8.128121-20.122293-22.163789-33.045627-48.015573-38.340213-77.44893-14.152325-78.669734 31.410384-155.491377 107.854427-178.856527 56.525388-17.275455 108.307751-5.888104 152.962787 33.323966 30.494525 26.777877 47.208185 61.219293 51.583842 101.388155 6.989181 64.168462-28.291346 127.891785-86.016049 156.574035-19.441794 9.661034-39.8588 15.511275-61.60508 16.493649-1.51654 0.068562-3.027963 0.270153-4.53734 0.456395-0.662079 0.080841-1.310855 0.279363-2.432399 0.525979-1.038656 8.245801-2.494821 16.548908-3.069919 24.912389-3.867074 56.355519 6.41306 109.87034 32.751938 160.058392 16.978696 32.352849 39.11281 60.691267 66.74003 84.61719 3.973498 3.441379 4.977361 6.475482 3.691065 11.620665-9.977235 39.922245-19.61985 79.924307-29.372981 119.900787C290.567283 829.28632 290.351366 829.907467 289.697473 832.104505z"
                                  fill="#dbdbdb"></path>
                            <path d="M660.777977 221.667565c-17.747199-10.588149-36.118616-18.956747-55.346539-25.437345-39.931454-13.456477-80.924077-17.947767-122.847909-14.155395-21.603017 1.954515-42.682102 6.517437-63.238276 13.388938-3.798513 1.269923-5.878894 0.766456-8.268314-2.732228-21.895683-32.078603-44.020586-64.003709-66.071811-95.977935-0.850367-1.234107-1.639337-2.511193-2.816139-4.322445 6.92369-2.870374 13.46671-5.826705 20.179598-8.324596 37.861306-14.089903 76.855412-22.989597 117.228935-25.810852 96.15906-6.718005 184.418196 16.448624 264.690428 69.788459 4.214998 2.801812 7.586792 3.326768 12.44852 1.659803 67.808362-23.25054 142.045133 1.582031 182.299953 60.735269 40.628326 59.7048 34.724873 141.057643-14.112416 194.424084-45.51052 49.732681-116.222001 65.959248-177.946808 39.373753-50.794873-21.87624-82.153068-60.8376-93.646843-114.949009-5.818519-27.39493-3.783163-54.737672 5.430686-81.370239C659.418003 226.056526 659.992077 224.124524 660.777977 221.667565z"
                                  fill="#dbdbdb"></path>
                        </svg>',
                'target' => '_blank',
                'title' => 'Dashboard'
            ],
            [
                'href' => '/explorer.php',
                'svg' => '<svg class="icon" style="" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="64.125" height="64">
    <path d="M0 140.900288l422.717771-57.489617 0 405.809061L0.025363 488.399659 0 140.900288zM422.717771 937.300569l-422.667045-54.04024-0.025363-342.9932L422.717771 539.945864M464.989549 74.956315 1025.115959 0l0 488.399659L464.989549 489.219731 464.989549 74.956315zM1025.115959 540.258675l0 483.741309L464.989549 945.754924l0-405.809061L1025.115959 540.258675z"
          fill="#dbdbdb"></path>
</svg>',
                'target' => '_blank',
                'title' => 'Explorer'
            ],
        ]);
        $this->assign('timeline', [
            [
                'title' => 'Free Web Template',
                'content' => 'Timeline is free responsive template by <span class="blue">template</span><span
                                    class="green">mo</span>. This layout is based on Bootstrap v3.1.1 and you may use
                                this template for any website. Credit goes to <a rel="nofollow" href="#">Unsplash</a>
                                for all images.',
            ],
        ]);
        $this->assign('timeline2', [
            [
                'title' => 'Donec at scelerisque',
                'img' => 'http://www.jq22.com/demo/jquery-moban20150930/images/project-1.jpg',
                'time' => '12-31-2016',
            ],
        ]);

        $this->display();
    }

}