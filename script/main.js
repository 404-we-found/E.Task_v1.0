import createTask from './taskModule/createtask.js'
import getTaskList from './taskModule/getTaskList.js'

let welStatus = 1;

if(welStatus) {
    $(".main-welcome").hide();
}


var taskNums = 0,  // 获取任务个数
    username

// 功能页渲染时便发送请求，获取相关任务列表
window.onload = function(){
    axios.get("http://127.0.0.1:5500/static/api/tasklist.json",{
        "username": username
    })
    .then( (res) => {
        setTimeout(() => {
            $("#sidebar_loading").hide();
            taskNums = res.data.data.length;
            for(let i = 0; i<taskNums; i++) {
                let taskname = res.data.data[i]["taskname"],
                    taskid = res.data.data[i]["taskid"];
                getTaskList(taskname,taskid);
            }
        },1000)
    } )
    .catch(()=>{
        console.log("服务器错误！")
    });
}

createTask();