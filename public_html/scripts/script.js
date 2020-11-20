$(document).ready(function () {
    $("#contact").validate({
        debug:true,
        errorClass: "alert alert-danger",
        errorLabelContainer:'#output-area',
        errorElement:"div",

        rules: {
            email: {
                required: true,

            },
            message:{
                required: true,

            }
        },
        messages: {
        email: {
            required: "Name is required",
            email: "please provide a valid email"
        },
            message: {
            required: "Message is a required field"
        }
    },
        submitHandler: (form) => {
            $("#contact").ajaxSubmit({
                type: "POST",
                url: $("#contact").attr('action'),
                success: (ajaxOutput) => {
                    $("#output-area").css("display", "")
                    $("#output-area").html(ajaxOutput)

                    if ($(".alert-success").length >= 1) {
                        $("#contact")[0].reset()
                    }


                }
            })
        }
    })
})