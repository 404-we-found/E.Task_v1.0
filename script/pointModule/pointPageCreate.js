var  pointPageCreate = (document) => {

    $(document).on('click', '.sidebar-point-item', function(){
        $(".main-welcome").hide();
        axios.get('http://127.0.0.1:5500/static/api/pointItem.json')
        .then(
            () => {
                
            }
        )
    })


}

export default pointPageCreate;