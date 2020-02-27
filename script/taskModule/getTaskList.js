const getTaskList = (taskname, taskid) => {
    var taskitem = $(`
        <div class="sidebar-task-item">${taskname}==${taskid}</div>
    `);
    $(".sidebar").append(taskitem);
}

export default getTaskList;