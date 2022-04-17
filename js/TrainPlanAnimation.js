// Загрузка скрипта после полной загрузки страницы
var plan_images = ["images/anzhumaniya.jpg", "images/turnik.jpg", "images/presskachat.jpg", "images/begit.jpg"];
var hide_all = false;

$(document).ready(function() {
    // Привязываем событие "click" - нажатие, к кнопке с id="mybutton"
    $(document).on("click", "#planbutton", function() {
        // Привязываем функцию "toggle" к элементу с тэгом <img>
        // содержащимся в элементе с id="img_box"
        if (hide_all) {
            $("#img_plan_neuro").attr("src", "").toggle();
            $("#img_plan_morning").toggle();
            $("#img_plan1").toggle();
            $("#img_plan2").toggle();
            $("#img_plan_evening").toggle();
            $("#img_plan3").toggle();
            $("#img_plan4").toggle();
            hide_all = false;
        } else {

            $("#img_plan_neuro").toggle().attr("src", "images/neuro.gif");
            setTimeout(function () {
                $("#img_plan_morning").toggle();
                $("#img_plan1").attr("src", plan_images[Math.floor(Math.random() * 4)]).toggle();
                $("#img_plan2").attr("src", plan_images[Math.floor(Math.random() * 4)]).toggle();
                $("#img_plan_evening").toggle();
                $("#img_plan3").attr("src", plan_images[Math.floor(Math.random() * 4)]).toggle();
                $("#img_plan4").attr("src", plan_images[Math.floor(Math.random() * 4)]).toggle();
                hide_all = true;
            }, 3000);
        }
    });
});