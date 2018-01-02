app.controller('myController', function($scope) {
          // 实例化一个新的日期
           var time = new Date();
           var newTime = time.getFullYear(),
               Month   = time.getMonth()+1,
               day     = time.getDate();
          // 进行拼接 
           var Time = newTime + "年" + Month + "月" + day + "日";
           var date = new Date().toLocaleTimeString();
           // 输出时间
           $scope.theTime = Time + date; 
        })