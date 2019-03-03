  //用户名验证
  function checkname(){ 
    var div = document.getElementById("s1"); 
    div.innerHTML='';
    var name1 = document.tijiao.text1.value; 
    if (name1 == "") { 
    div.innerHTML = "用户名不能为空！"; 
    return false; 
} 
    if (name1.length < 3 || name1.length > 10) { 
    div.innerHTML = "长度3-10个字符"; 
    return false; 
} 
    var charname1 = name1.toLowerCase(); 
    for (var i = 0; i < name1.length; i++) { 
    var charname = charname1.charAt(i); 
    if (!(charname >= 0 && charname <= 9) && (!(charname >= 'a' && charname <= 'z')) && (charname != '_')) { 
        div.innerHTML = "用户名包含非法字符"; 
        return false; 
    } 
} 
    return true;
}

//密码验证
function checkpassword(){ 
    var div = document.getElementById("s2"); 
    div.innerHTML='';
    var password = document.tijiao.text2.value; 
    if (password == "") { 
    div.innerHTML = "密码不能为空"; 
    return false; 
} 
    if (password.length < 4 || password.length > 16) { 
    div.innerHTML = "密码长度为4-16位"; 
    return false; 
    } 
    return true; 
}

function checkrepassword(){ 
    var div = document.getElementById("s3"); 
    div.innerHTML='';
    var password = document.tijiao.text2.value; 
    var repass = document.tijiao.text3.value; 
    if (repass == "") { 
    div.innerHTML = "密码不能为空"; 
    return false; 
} 
    if (password != repass) { 
    div.innerHTML = "密码不一致"; 
    return false; 
} 
    return true; 
}



