<script type="text/javascript">
$(document).ready(function (){
    $('#menu > button').click(function (){
        var o=$(this);
        var w,o;
        if (o.text()=='a') {
            o.text('>>');
            w='30px';
            o=0;
        } else {
            o.text('<<');
            w='10%';
            o=1;
        };
        $("#menu").animate({
            width: w
        });
        $("#menu > p").animate({
            opacity: o
        });
    });
});
</script>