<?php
	ob_start();
	require __DIR__.'/../../Web/KODExplorer/config/config.php';
	$app = new Application();
	init_config();
	$app->run();
