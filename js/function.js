document.getElementById('bold-btn').addEventListener('click', function(){
    // const text = document.getElementById('text_area');
    // const textvalue = text.value;
    // text.value = textvalue.bold();
    document.getElementById("text_area").style.fontWeight="bolder";
})

document.getElementById('italic-btn').addEventListener('click', function(){
    document.getElementById('text_area').style.fontStyle='italic';
})
document.getElementById('underline-btn').addEventListener('click', function(){
    document.getElementById('text_area').style.textDecoration='underline';
})

// Align left
document.getElementById('align_left').addEventListener('click', function(){
    document.getElementById('text_area').style.textAlign='left';
})

//Align center
document.getElementById('align_center').addEventListener('click', function(){
    document.getElementById('text_area').style.textAlign='center';
})

// Align right
document.getElementById('align_right').addEventListener('click', function(){
    document.getElementById('text_area').style.textAlign='right';
})

//Change Text color
document.getElementById('color_apply').addEventListener('click', function(){
    const getColor = document.getElementById('color_field').value;
    document.getElementById('text_area').style.color = getColor;

})

// Change font size
document.getElementById('font_size').addEventListener('click', function(){
    const font_Size = document.getElementById('font_size').value;
    const fontSizefloat = parseFloat(font_Size);
    document.getElementById('text_area').style.fontSize = fontSizefloat + "px";
   

 })

