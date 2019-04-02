!!目录结构
    -build  // npm run build 打包后的文件  
    -config // webpack打包配置 
    -node_modules // node包 
    -public // 静态资源模板 
    -scropts // webpack node启动命令配置 
    -src // 项目目录 
        -assets // 通用素材文件夹 可通过ipmport 'xxx' from 'assets/xxx.png' 导入素材 
        -common // 通用工具配置 api tool ipmport 'xxx' from 'common/xxx' 
        -components // 通用自定义组件库 ipmport 'xxx' from 'components/xxx' 
        -routes // 项目&路由 
            -PC
                -Home // 主要内容 
                    -RaterIndex // 专家端页面 
                        -components //专家端通用组件
                            -AuthBox //验证身份组件
                            -ChangePassword //修改密码组件
                            -Rule //无用
                        -View //专家端页面视图
                            -AllCase //所有案例
                            -ChosenCase //入选案例
                                -components //入选案例组件
                                    -CommentBox //点评组件
                                    -ScoreBox //打分组件
                            -Featured 精选案例预留
                    -UserIndex //选手端页面
                        -components //选手端通用组件
                            -AuthBox //验证选手身份组件
                            -UploadCase //上传案例组件
                            -UploadVideo //上传视频组件
                            -VideoView //查看视频组件
                        -View //选手端页面视图
                            -AllCase //所有案例
                            -ChosenCase //入选案例
                                -components //入选案例组件
                                    -CommentBox //查看点评组件
                            -Rule //规则
                                -components //规则组件
                                    -ProjectInfo //项目介绍
                                    -Rule //项目规则
                                    -Videos //项目视频
                -LoginView // 专家选手登录页 
                    -components
                        -RaterLogin //专家登录框组件
                -UserReg // 选手未注册扫码注册页 

!!jsx内常用方法

componentWillReceiveProps  react 生命周期 当组件this.props值更新时调用，函数内this.props为旧的props 带一个形参nextprops ,nextprops为更新后的this.props;
componentDidMount   react 生命周期 当组件加载完成时调用
refreshProps    自定义方法，在componentWillReceiveProps componentDidMount 内调用，传入参数为prop,保证prop一直是最新的。

