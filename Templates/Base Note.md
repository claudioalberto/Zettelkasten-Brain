<%*

var title = tp.file.title;

if (title.startsWith("b")){
	await tp.file.move("/Bible")
	tp.file.include("[[Bible Chapter NVI]]");
}
else{
	await tp.file.move("/Notes")
	tp.file.include("[[Note Default (template)]]")
}
-%>



