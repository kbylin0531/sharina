<?php class system_group extends Controller{public static $static_sql=null;private $sql;function __construct(){parent::__construct();$this->sql=self::load_data();$this->_init();����������̳ا���猹���Ą�܀�ŀ���몮���������ïϚ�����;}public static function load_data(){if(is_null(self::$static_sql)){self::$static_sql=system_group_data();}return self::$static_sql;}public static function get_info($�){$��=self::load_data();������Ք������옓��������䇇���Ʒ������������ˌ�󲦏���ݨ靪�������ǟ;return $��->get($�);����������ʚ��������������Ưפ�҇;}public static function space_change($���,$����=false){$Ω=self::load_data();$��λ�=$Ω->get($���);����;if(!is_array($��λ�)){show_json($this->L["data_not_full"],!1);}if($����===!1){$��ŗ�=_path_info_more(GROUP_PATH.$��λ�['path'].'/');$�е�=$��ŗ�['size'];if(isset($��λ�['home_path'])&& file_exists(iconv_app($��λ�['home_path']))){$��ŗ�=_path_info_more(iconv_app($��λ�['home_path']));$�е�+= $��ŗ�['size'];}}else{$�е�=floatval($��λ�['config']['size_use'])+floatval($����);}$��λ�['config']['size_use']=$�е�<0?0:$�е�;����������ɀ�ś�񎻅���߶�����;$Ω->set($���,$��λ�);����ӓ������ֽ�ܓ��������Żߟ�ָ��̩������Ρ�ᩤ�������×��ȋ���;}public static function space_check($�){$���=self::load_data();��������Ԗб�ɟ�;$�=$���->get($�);if(!is_array($�)){show_json($this->L["data_not_full"],!1);}$ဋ��=floatval($�['config']['size_use']);$�=floatval($�['config']['size_max']);if($�!=0&& $�*0x0000040000000<$ဋ��){show_json($GLOBALS['L']['space_is_full'],!1);}}private function _init(){if(count($this->sql->get())>0)return;$�=array('1' =>array('group_id' =>'1','name' =>'root','parent_id' =>'','children' =>'','config' =>array('size_max' =>floatval(1.5),'size_use' =>floatval(0x00000400*0x00000400)),'path' =>hash_path(),'create_time'=> time(),));��዗�ஆ���ܺ����ȫ��;$this->sql->reset($�);������Δ;}public static function _filter_list($�ɺ�,$̰�='path'){if($GLOBALS['is_root'])return $�ɺ�;foreach($�ɺ� as $��ѭ�=>&$��){unset($��[$̰�]);��;}return $�ɺ�;���ǫ١��ۨ������엏�;}public function get(){$�����=self::_filter_list($this->sql->get());show_json($�����,!0);�ú�;}public function add(){if(!isset($this->in['name'])|| !isset($this->in['parent_id'])|| !isset($this->in['size_max']))show_json($this->L["data_not_full"],!1);$��=$this->sql->get_max_id().'';���×����������̭����ש���Ȋ�����ٝ�ӿ���;$�����=array('group_id' =>$��,'name' =>rawurldecode($this->in['name']),'parent_id' =>$this->in['parent_id'],'children' =>'','config' =>array('size_max' =>floatval($this->in['size_max']),'size_use' =>floatval(0x00000400*0x00000400)),'path' =>hash_path($this->in['name']),'create_time'=> time(),);if(isset($this->in['home_path'])){$�����['home_path']=_DIR(rawurldecode($this->in['home_path']));if(!file_exists($�����['home_path'])){show_json($this->L['not_exists'],!1);}$�����['home_path']=iconv_app($�����['home_path']);}else{unset($�����['home_path']);��ı��������者�;}$this->_parent_child_change($�����,!0);if($this->sql->set($��,$�����)){$this->_initDir($�����['path']);show_json($this->L['success']);}show_json($this->L['error'],!1);}public function edit(){if(!$this->in['group_id'])show_json($this->L["data_not_full"],!1);$�=$this->sql->get($this->in['group_id']);�¹����ʽ����򫄥��;if(!is_array($�)){show_json($this->L['not_exists'],!1);}if(isset($this->in['name'])){$�['name']=rawurldecode($this->in['name']);}if(isset($this->in['size_max'])){$�['config']['size_max']=floatval($this->in['size_max']);}if(isset($this->in['parent_id'])&& $�['parent_id']!='' && $this->in['parent_id']!=$�['parent_id']){$����=explode(',',$�['children']);if(in_array($this->in['parent_id'],$����)){show_json($this->L['current_has_parent'],!1);}self::space_change($this->in['group_id']);$this->_parent_child_change($�,!1);���ߐ������������я;$�['parent_id']=$this->in['parent_id'];�����ċ���������;$this->_parent_child_change($�,!0);}if(isset($this->in['home_path'])){$�['home_path']=_DIR(rawurldecode($this->in['home_path']));if(!file_exists($�['home_path'])){show_json($this->L['not_exists'],!1);}$�['home_path']=iconv_app($�['home_path']);}else{unset($�['home_path']);��Ǜ��������������צ����ך̤ɕ�ݻ�Ҵ̭�����;}if($�!=$this->sql->get($this->in['group_id'])){$this->sql->set($this->in['group_id'],$�);}show_json($this->L['success']);}public function del(){if(!isset($this->in['group_id']))show_json($this->L["data_not_full"],!1);if(strlen($this->in['group_id'])<=0x001)show_json($this->L['default_user_can_not_do'],!1);$�֭�=$this->sql->get($this->in['group_id']);$this->_parent_child_change($�֭�,!1);$this->sql->set(array('parent_id',$�֭�["group_id"]),array('parent_id','1'));������ǖ���������������ũ�ȯ匊�������׫�������������ꆭ��;system_member::group_remove_user_update($�֭�["group_id"]);$this->sql->remove($this->in['group_id']);����Ó����������ڝ��´������㥳�����ĝ����;if(strlen($�֭�['path'])!=0){del_dir(GROUP_PATH.$�֭�['path'].'/');show_json($this->L['success']);}show_json($this->L['error'],!1);}private function _parent_child_change($�ʬ,$��){if(!is_array($�ʬ)){show_json($this->L['not_exists'],!1);}if($�ʬ['parent_id']==0x001){return;}$��=$�ʬ['group_id'];$����=explode(',',$�ʬ['children']);if($����[0]==''){unset($����[0]);}$����[]=$�ʬ['group_id'];while(strlen($�ʬ['group_id'])>0x0002){$�ʬ=$this->sql->get($�ʬ['parent_id']);if(!is_array($�ʬ)){show_json($this->L['not_exists'],!1);}$��ۅ�=explode(',',$�ʬ['children']);if($��ۅ�[0]==''){unset($��ۅ�[0]);}if($��){foreach($���� as $����=>$���){$��ۅ�[]=$���;}}else{foreach($��ۅ� as $����=>$���){if(in_array($���,$����))unset($��ۅ�[$����]);}}$��=implode(',',$��ۅ�);if($��!=$�ʬ['children']){$�ʬ['children']=$��;$this->sql->set($�ʬ['group_id'],$�ʬ);}}}private function _initDir($����){$�=array('home','data');�����Üᩦ�������������Ѧ��ټ�Ӕ�����Ϫ�̋��ٲ�������ҫӭ猁�������;$�ܲ�=$this->config['setting_system']['new_group_folder'];���ݵ����﵉����������߆��㧽�������������;$����=explode(',',$�ܲ�);��ꀢΨ��;$����=GROUP_PATH.$����.'/';mk_dir($����);foreach($� as $){mk_dir($����.$);���ß������;}foreach($���� as $){mk_dir($����.'home/'.iconv_system($));��������þ���������;}}}