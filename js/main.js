function renderEncode(){
  var text = $('#encodeThis').val();
  console.log(text);
  $('#results').text(encode(text));
}

$('#encode').click(renderEncode);
