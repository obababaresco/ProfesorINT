$(document).ready(function () {
    console.log('ready');

    /**
     * HTML ROL THEACHER
     */
    /*adapt full screen*/
    var footer = $('#footer').height();
    $('#role').height($(window).height() - 90 - footer);

    /*select rol*/
    $('#buttonSelectRol').click(function(){
        $("#selectRol").find("option:selected").each(function() {
            if ($(this).val().trim() == '') {
              alert('Seleccione un rol');
            }else{
                $("#role").addClass("hide");
                $("#mainContainer").removeClass("hide");
                $('html,body').animate({
                    scrollTop: $("#mainContainer").offset().top
                }, 500);
            }
        });
    });

    /**
     * HTML MAIN CONTAINER
     */
    /*adapt sidebar*/
        /*small screen*/
        if ($(window).height() <= 800 && $(window).width() >= 1120) {
            $('#colRight').height($(window).height() - 70);
            $('#logoIntisana').css("display", "none");
            $('#calendar').css("display", "block");
            $('.htg').css("height", "50%");
        } else {
            /*normal screen*/
            if ($(window).height() > 800 && $(window).width() > 1120) {
                $('#colRight').height($(window).height() - 70);
            };
        };
    
        $(window).on("scroll", function () {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            /*small screen footer*/
            if ($(window).height() <= 800 && $(window).width() >= 1120 && (scrollHeight - scrollPosition) / scrollHeight === 0) {
                $('#colRight').height($(window).height() - 188);
                $('#calendar').css("display", "none");
                $('#logoIntisana').css("display", "flex");
                $('.htg').css("height", "70%");
                $('.logo-colegio-intisana').css("height", "30%");
            } else {
                if ($(window).height() <= 800 && $(window).width() >= 1120) {
                    $('#colRight').height($(window).height() - 70);
                    $('#logoIntisana').css("display", "none");
                    $('#calendar').css("display", "block");
                    $('.htg').css("height", "50%");
                }
            };
            /*normal screen footer*/
            if ($(window).height() > 800 && $(window).width() > 1120 && (scrollHeight - scrollPosition) / scrollHeight === 0) {
                $('#colRight').height($(window).height() - 188);
            } else {
                if ($(window).height() > 800 && $(window).width() > 1120) {
                    $('#colRight').height($(window).height() - 70);
                };
            };
        });

    /*hide sidebar*/
    $("#btn_panel_izq").click(function () {
        if ($("#cont_bloques").hasClass("hidePanel")) {
            $("#cont_bloques").removeClass("hidePanel")
            $(".col-left").css({ "width": "71%" });
            $("#sliderOption .MS-content .item").css({"width": "16.5%"})
            $('#cambio').replaceWith('<img id="cambio" src="images/home/ico-TRIANGULO.png" alt="">');
        } else {
            $("#cont_bloques").addClass("hidePanel")
            $(".col-left").css({ "width": "95%" });
            $("#sliderOption .MS-content .item").css({"width": "14.5%"})
            $('#cambio').replaceWith('<img id="cambio" src="images/home/ico-triangulo-left.png" alt="">');
        }
    });

    /*inicializando slider menú*/
    $('#sliderOption').multislider({
        interval: 0,
    });

    /*slider menú*/
    $(".item").click(function () {
        var id = this.id.replace("slider", "");
        $(".item").removeClass("check_item");
        $(".bloque").addClass("hide");
        $("#" + id).removeClass("hide");
        $("#slider" + id).addClass("check_item");
        $("#imgperfil").attr("src", "images/home/ico-perfil.png");
        $("#imgrendimiento").attr("src", "images/home/ico-rendimiento.png");
        $("#imglista").attr("src", "images/home/ico-lista.png");
        $("#imgasistencia").attr("src", "images/home/ico-asistencia.png");
        $("#imgcalificaciones").attr("src", "images/home/ico-calificaciones.png");
        $("#imglibro").attr("src", "images/home/ico-libro de tareas.png");
        $("#imgtareas").attr("src", "images/home/ico-mochila.png");

        switch (id) {
            case "perfil":
                $("#img" + id).attr("src", "images/home/ico-perfil2.png");
                break;
            case "rendimiento":
                $("#img" + id).attr("src", "images/home/ico-rendimiento2.png");
                break;
            case "lista":
                $("#img" + id).attr("src", "images/home/ico-lista2.png");
                break;
            case "asistencia":
                $("#img" + id).attr("src", "images/home/ico-asistencia2.png");
                break;
            case "calificaciones":
                $("#img" + id).attr("src", "images/home/ico-calificaciones2.png");
                break;
            case "libro":
                $("#img" + id).attr("src", "images/home/ico-libro de tareas2.png");
                break;
            case "tareas":
                $("#img" + id).attr("src", "images/home/ico-mochila2.png");
                break;
        }
    });

    /*event select circular*/
    $(".select_circle").click(function () {
        var id = this.id.replace("selectSeccion", "");
        var color = id === "Li" ? "#610606" : id === "Ma" ? "#b5970d" : "#418631";
        if ($("#2_" + id).hasClass("hide")) {
            $("#1_" + id).css("background-color", color);
            $("#2_" + id).removeClass("hide");
            $("#3_" + id).removeClass("hide");
        } else {
            $("#1_" + id).css("background-color", "#ffffff");
            $("#2_" + id).addClass("hide");
            $("#3_" + id).addClass("hide");
        }
    });

    $("input[name=item]").change(function () {
        var element = $("input[name=item]:checked");
        var val = element.val();
        var id = $(element).attr("id").split("_")[1];
        $("#1_" + id).css("background-color", "#ffffff");
        $("#2_" + id).addClass("hide");
        $("#3_" + id).addClass("hide");
        $("#seccion_" + id).text(val);
    });

    /**
     * HTML THEACHER FILE
     */
    /* Nav file */
    $("#fichaProf").show();
    $("#editInfPersonal").hide();
    $("#editExperienciaLaboral").hide();
    $("#editInfAcademica").hide();
    $("#editInfCapacitacion").hide();

    $("#edit-Inf").click(function(){
        $("#fichaProf").hide();
        $("#editInfPersonal").show();
        $("#editExperienciaLaboral").hide();
        $("#editInfAcademica").hide();
        $("#editInfCapacitacion").hide();
    });

    $("#edit-exp").click(function(){
        $("#fichaProf").hide();
        $("#editInfPersonal").hide();
        $("#editExperienciaLaboral").show();
        $("#editInfAcademica").hide();
        $("#editInfCapacitacion").hide();
    });

    $("#edit-academica").click(function(){
        $("#fichaProf").hide();
        $("#editInfPersonal").hide();
        $("#editExperienciaLaboral").hide();
        $("#editInfAcademica").show();
        $("#editInfCapacitacion").hide();
    });
    $("#edit-capacitacion").click(function(){
        $("#fichaProf").hide();
        $("#editInfPersonal").hide();
        $("#editExperienciaLaboral").hide();
        $("#editInfAcademica").hide();
        $("#editInfCapacitacion").show();
    });

    $(".back_ficha").click(function(){
        $("#fichaProf").show();
        $("#editInfPersonal").hide();
        $("#editExperienciaLaboral").hide();
        $("#editInfAcademica").hide();
        $("#editInfCapacitacion").hide();
    });

    /* diference date */
        let val1 = $("#fechaInicio-experiencia_1").val();
        let val2 = $("#fechaFin-experiencia_1").val();
        let dateStart = new Date(val1);
        let dateEnd = new Date(val2);

        let val3 = $("#fechaInicio-experiencia-2_1").val();
        let val4 = $("#fechaFin-experiencia-2_1").val();
        let dateStart1 = new Date(val3);
        let dateEnd1 = new Date(val4);
        
        calcDate(1,dateEnd,dateStart);
        calcDate1(1,dateEnd1,dateStart1);

   $("input[name=date-experiencia_1]").change(function(){
        
        let val1 = $("#fechaInicio-experiencia_1").val();
        let val2 = $("#fechaFin-experiencia_1").val();
        let dateStart = new Date(val1);
        let dateEnd = new Date(val2);
        
        calcDate(1,dateEnd,dateStart);
    });

    $("input[name=date-experiencia-2_1]").change(function(){
        
        let val3 = $("#fechaInicio-experiencia-2_1").val();
        let val4 = $("#fechaFin-experiencia-2_1").val();
        let dateStart1 = new Date(val3);
        let dateEnd1 = new Date(val4);
        
        calcDate1(1,dateEnd1,dateStart1);
    });

    function calcDate(id,date1,date2) {
        let diff = Math.floor(date1.getTime() - date2.getTime());
        let day = 1000 * 60 * 60 * 24;
 
        let days = Math.floor(diff/day);
        let weeks = Math.floor(days/7);
        let months = Math.floor(days/31);
        let years = Math.floor(months/12);

        if (years === 0 && months === 0 && weeks === 0) {
            $("#diff-experiencia_"+id).text(+days+ " Día(s) "); 
        }else{
            if (years === 0 && months === 0){
                $("#diff-experiencia_"+id).text(+weeks+ " Semana(s) ");
            }else{
                if (years === 0){
                    $("#diff-experiencia_"+id).text(+months+ " Mes(es) " +weeks+ " Semana(s) ");
                }else{
                    if (years > 0){
                        $("#diff-experiencia_"+id).text(+years+ " Año(s) " +months+ " Mes(es) " +weeks+ " Semana(s) ");
                    }else{
                        $("#diff-experiencia_"+id).text("Duración");
                    };
                };
            };
        };
    };

    function calcDate1(id,date1,date2) {
        let diff = Math.floor(date1.getTime() - date2.getTime());
        let day = 1000 * 60 * 60 * 24;
 
        let days = Math.floor(diff/day);
        let weeks = Math.floor(days/7);
        let months = Math.floor(days/31);
        let years = Math.floor(months/12);

        if (years === 0 && months === 0 && weeks === 0) {
            $("#diff-experiencia-2_"+id).text(+days+ " Día(s) "); 
        }else{
            if (years === 0 && months === 0){
                $("#diff-experiencia-2_"+id).text(+weeks+ " Semana(s) ");
            }else{
                if (years === 0){
                    $("#diff-experiencia-2_"+id).text(+months+ " Mes(es) " +weeks+ " Semana(s) ");
                }else{
                    if (years > 0){
                        $("#diff-experiencia-2_"+id).text(+years+ " Año(s) " +months+ " Mes(es) " +weeks+ " Semana(s) ");
                    }else{
                        $("#diff-experiencia-2_"+id).text("Duración");
                    };
                };
            };
        };
    };

    /* add event */
    $(".add-icon-experiencia").click(function(){
        var id = parseInt($(this)[0].id.replace("add-icon-experiencia_",""));
        var next_id = id+1;
        var html = `
        <div id="container-element-experiencia_`+next_id+`" class="separator">
            <div class="item-container">
            <img id="delete-element-experiencia_`+next_id+`" class="delete delete-experiencia" src="images/home/delete.png" alt="delete">
            <input type="text" class="item-contenido" style="font-weight: bold;" placeholder="Cargo desempeñado">
            <input type="text" class="item-contenido" placeholder="Institución educativa">
                <div class="item-fecha">
                    <P>
                        <img src="images/home/calendar.png" alt="calendar">
                        <span><input type="date" id="fechaInicio-experiencia_`+next_id+`" name="date-experiencia_`+next_id+`" placeholder="Fecha de ingreso -" onfocus="(this.type='date')" onblur="(this.type='text')"></span>
                        <span><input type="date" id="fechaFin-experiencia_`+next_id+`" name="date-experiencia_`+next_id+`" placeholder="salida" onfocus="(this.type='date')" onblur="(this.type='text')"></span>
                    </P>
                    <p><img src="images/home/watch.png" alt="watch"><span id="diff-experiencia_`+next_id+`">Duración</span></p>
                </div>
            </div>
        </div>
        `
        $("#envent-experiencia").append(html);
        $(this).attr("id",next_id);

        $(".delete-experiencia").click(function(){
            var id_delete = parseInt($(this)[0].id.replace("delete-element-experiencia_",""));
            $("#container-element-experiencia_"+id_delete).remove();
        });

        $("input[name=date-experiencia_"+next_id+"]").change(function(){
        
            let val1 = $("#fechaInicio-experiencia_"+next_id).val();
            let val2 = $("#fechaFin-experiencia_"+next_id).val();
            let dateStart = new Date(val1);
            let dateEnd = new Date(val2);
            
            calcDate(next_id,dateEnd,dateStart);
        });
    });

    $(".add-icon-experiencia-2").click(function(){
        var id = parseInt($(this)[0].id.replace("add-icon-experiencia-2_",""));
        var next_id = id+1;
        var html = `
        <div id="container-element-experiencia-2_`+next_id+`" class="separator">
            <div class="item-container">
            <img id="delete-element-experiencia-2_`+next_id+`" class="delete delete-experiencia-2" src="images/home/delete.png" alt="delete">
            <input type="text" class="item-contenido" style="font-weight: bold;" placeholder="Cargo desempeñado">
            <input type="text" class="item-contenido" placeholder="Institución educativa">
                <div class="item-fecha">
                    <P>
                        <img src="images/home/calendar.png" alt="calendar">
                        <span><input type="date" id="fechaInicio-experiencia-2_`+next_id+`" name="date-experiencia-2_`+next_id+`" placeholder="Fecha de ingreso -" onfocus="(this.type='date')" onblur="(this.type='text')"></span>
                        <span><input type="date" id="fechaFin-experiencia-2_`+next_id+`" name="date-experiencia-2_`+next_id+`" placeholder="salida" onfocus="(this.type='date')" onblur="(this.type='text')"></span>
                    </P>
                    <p><img src="images/home/watch.png" alt="watch"><span id="diff-experiencia-2_`+next_id+`">Duración</span></p>
                </div>
            </div>
        </div>
        `
        $("#envent-experiencia-2").append(html);
        $(this).attr("id",next_id);

        $(".delete-experiencia-2").click(function(){
            var id_delete = parseInt($(this)[0].id.replace("delete-element-experiencia-2_",""));
            $("#container-element-experiencia-2_"+id_delete).remove();
        });

        $("input[name=date-experiencia-2_"+next_id+"]").change(function(){
        
            let val3 = $("#fechaInicio-experiencia-2_"+next_id).val();
            let val4 = $("#fechaFin-experiencia-2_"+next_id).val();
            let dateStart1 = new Date(val3);
            let dateEnd1 = new Date(val4);
            
            calcDate1(next_id,dateEnd1,dateStart1);
        });
    });

    $(".add-icon-academica").click(function(){
        var id = parseInt($(this)[0].id.replace("add-icon-academica_",""));
        var next_id = id+1;
        var html = `
        <div id="container-element-academica_`+next_id+`" class="separator">
            <div class="item-container">
                <img id="delete-element-academica_`+next_id+`" class="delete delete-academica" src="images/home/delete.png" alt="delete">
                <input type="text" class="item-contenido" style="font-weight: bold;" placeholder="Nombre de la carrera">
                <input type="text" class="item-contenido" placeholder="Universidad o instituto">
                <div class="item-fecha">
                    <P>
                        <img src="images/home/calendar.png" alt="calendar">
                        <span><input type="text" id="fechaInicio" name="date" placeholder="Año" onfocus="(this.type='date')" onblur="(this.type='text')"></span>
                    </P>
                    <p><span><input type="text" placeholder="Nivel de estudio"></span></p>  
                    <div class="center_content">
                        <label id="file_donwload" class="donwload_file img_upload" for="donwload">Subir archivo</label>
                        <input type="file" class="control-file" id="donwload">
                    </div>
                </div>
            </div>
        </div>
        `
        $("#envent-academica").append(html);
        $(this).attr("id",next_id);

        $(".delete-academica").click(function(){
            var id_delete = parseInt($(this)[0].id.replace("delete-element-academica_",""));
            $("#container-element-academica_"+id_delete).remove();
        });
    });

    $(".add-icon-capacitaciones").click(function(){
        var id = parseInt($(this)[0].id.replace("add-icon-capacitaciones_",""));
        var next_id = id+1;
        var html = `
        <div id="container-element-capacitaciones_`+next_id+`" class="separator">
            <div class="item-container">
                <img id="delete-element-capacitaciones_`+next_id+`" class="delete delete-capacitaciones" src="images/home/delete.png" alt="delete">
                <input type="text" class="item-contenido" style="font-weight: bold;" placeholder="Nombre de la carrera">
                <input type="text" class="item-contenido" placeholder="Universidad o instituto">
                <div class="item-fecha">
                    <P>
                        <img src="images/home/calendar.png" alt="calendar">
                        <span><input type="text" id="fechaInicio" name="date" placeholder="Fecha" onfocus="(this.type='date')" onblur="(this.type='text')"></span>
                    </P>
                    <p><span><input type="text" placeholder="Número de horas"></span></p>  
                    <div class="center_content">
                        <label id="file_donwload" class="donwload_file img_upload" for="donwload">Subir archivo</label>
                        <input type="file" class="control-file" id="donwload">
                    </div>
                </div>
            </div>
        </div>
        `
        $("#envent-capacitaciones").append(html);
        $(this).attr("id",next_id);

        $(".delete-capacitaciones").click(function(){
            var id_delete = parseInt($(this)[0].id.replace("delete-element-capacitaciones_",""));
            $("#container-element-capacitaciones_"+id_delete).remove();
        });
    });

    /* delete event */
    $(".delete-experiencia").click(function(){
        var id = parseInt($(this)[0].id.replace("delete-element-experiencia_",""));
        $("#container-element-experiencia_"+id).remove();
    });

    $(".delete-experiencia-2").click(function(){
        var id = parseInt($(this)[0].id.replace("delete-element-experiencia-2_",""));
        $("#container-element-experiencia-2_"+id).remove();
    });

    $(".delete-academica").click(function(){
        var id = parseInt($(this)[0].id.replace("delete-element-academica_",""));
        $("#container-element-academica_"+id).remove();
    });

    $(".delete-capacitaciones").click(function(){
        var id = parseInt($(this)[0].id.replace("delete-element-capacitaciones_",""));
        $("#container-element-capacitaciones_"+id).remove();
    });

    /**
     * HTML PERFORMANCE
     */
    /*performance graph*/
    var options = {
        series: [{
            name: 'Income',
            type: 'column',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
            name: 'Cashflow',
            type: 'column',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
            name: 'Revenue',
            type: 'line',
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1, 4]
        },
        title: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: '200px'
                },
                xaxis: {
                    categories: [],
                    labels: {
                        show: false
                    }
                },
                yaxis: [
                    {
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        labels: {
                            style: {
                                color: '#008FFB',
                            }
                        },
                        title: {
                            text: undefined,
                            style: {
                                color: '#008FFB',
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    {
                        seriesName: 'Income',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#00E396'
                        },
                        labels: {
                            style: {
                                color: '#00E396',
                            }
                        },
                        title: {
                            text: undefined,
                            style: {
                                color: '#00E396',
                            }
                        },
                    },
                    {
                        seriesName: 'Revenue',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019'
                        },
                        labels: {
                            style: {
                                color: '#FEB019',
                            },
                        },
                        title: {
                            text: undefined,
                            style: {
                                color: '#FEB019',
                            }
                        }
                    },
                ],
            }
        }],
        xaxis: {
            categories: ["Q1PI1", "Q1P2", "PQ1", "Prom.", "Q2P1", "Q2P2", "PQ2", "Prom."],
        },
        yaxis: [
            {
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#008FFB'
                },
                labels: {
                    style: {
                        color: '#008FFB',
                    }
                },
                title: {
                    text: "Income (thousand crores)",
                    style: {
                        color: '#008FFB',
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
            {
                seriesName: 'Income',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#00E396'
                },
                labels: {
                    style: {
                        color: '#00E396',
                    }
                },
                title: {
                    text: "Operating Cashflow (thousand crores)",
                    style: {
                        color: '#00E396',
                    }
                },
            },
            {
                seriesName: 'Revenue',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#FEB019'
                },
                labels: {
                    style: {
                        color: '#FEB019',
                    },
                },
                title: {
                    text: "Revenue (thousand crores)",
                    style: {
                        color: '#FEB019',
                    }
                }
            },
        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topLeft',
                offsetY: 30,
                offsetX: 60
            },
        },
        legend: {
            show: false
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    /*Donuts income notes */
    var options = {
        series: [9, 1, 2],
        chart: {
            type: 'donut',
            height: '300px'
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#004ac4', '#f2e036', '#36f23a'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: '200px'
                },
            }
        }],
        legend: {
            position: 'bottom',
        },
        labels: ['Sin notas', 'Con notas, sin promedio', 'Con promedio']
    };
    var chart = new ApexCharts(document.querySelector("#chartDonutIngresoNotas"), options);
    chart.render();

    /*Donuts Lectionaries and books*/
    var options = {
        series: [9, 1, 2],
        chart: {
            type: 'donut',
            height: '300px'
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#004ac4', '#f2e036', '#36f23a'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: '200px'
                },
            }
        }],
        legend: {
            position: 'bottom',
        },
        labels: ['Sin notas', 'Con notas, sin promedio', 'Con promedio']
    };
    var chart = new ApexCharts(document.querySelector("#chartDonutLeccionariosLibros"), options);
    chart.render();

    /*Donuts Summary tasks*/
    var options = {
        series: [9, 1, 2],
        chart: {
            type: 'donut',
            height: '300px'
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#004ac4', '#f2e036', '#36f23a'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: '200px'
                },
            }
        }],
        legend: {
            position: 'bottom',
        },
        labels: ['Sin notas', 'Con notas, sin promedio', 'Con promedio']
    };
    var chart = new ApexCharts(document.querySelector("#chartDonutResumenTareas"), options);
    chart.render();

    /*Donuts Summary quotes*/
    var options = {
        series: [9, 1, 2],
        chart: {
            type: 'donut',
            height: '300px'
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#004ac4', '#f2e036', '#36f23a'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: '200px'
                },
            }
        }],
        legend: {
            position: 'bottom',
        },
        labels: ['Sin notas', 'Con notas, sin promedio', 'Con promedio']
    };
    var chart = new ApexCharts(document.querySelector("#chartDonutResumenCitas"), options);
    chart.render();

    /*funcion que ordena ascendente y descendente una tabla*/
    $('th').click(function () {
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc) {
            rows = rows.reverse()
        }
        for (var i = 0; i < rows.length; i++) {
            table.append(rows[i])
        }
        setIcon($(this), this.asc);
    })

    function comparer(index) {
        return function (a, b) {
            var valA = getCellValue(a, index),
                valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }

    function getCellValue(row, index) {
        return $(row).children('td').eq(index).html()
    }

    function setIcon(element, asc) {
        $("th").each(function (index) {
            $(this).removeClass("asc");
            $(this).removeClass("desc");
        });
        element.addClass("");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }

    /*funcion registrar asistencia*/
    $(".buttonCard").click(function () {
        $("#homeAsistencia").addClass("hide");
        $("#registrarAsistencia").removeClass("hide")
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    $("#btnCancel, #btnSave").click(function () {
        $("#homeAsistencia").removeClass("hide");
        $("#registrarAsistencia").addClass("hide")
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    $('#showAsistencias').click(function () {
        $(".hide_fila").removeClass("hide");
        $(".show_button").addClass("hide");
    });

    /*funcion tabla acordion*/
    $(".info_detail").click(function () {
        var id = this.id.replace("detail_", "");
        $("#detail_" + id).addClass("hide");
        $("#tab_" + id).removeClass("hide");
        $("#info_" + id).removeClass("hide");
        $("#infodetail_" + id).removeClass("hide");
        $("#icon_" + id).removeClass("hide");
        $("#button_" + id).removeClass("hide");
    })

    $(".btn_close").click(function () {
        var id = this.id.replace("button_", "");
        $("#detail_" + id).removeClass("hide");
        $("#tab_" + id).addClass("hide");
        $("#info_" + id).addClass("hide");
        $("#infodetail_" + id).addClass("hide");
        $("#icon_" + id).addClass("hide");
        $("#button_" + id).addClass("hide");
    });

    /*funcion abrir panel citas*/
    $(".iconCitas").click(function () {
        $("#contLista").addClass("hide");
        $("#contCitas").removeClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    })

    $(".back_list_alumnos").click(function () {
        $("#contLista").removeClass("hide");
        $("#contCitas").addClass("hide")
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*Toggle popover*/
    $(function() {
        $('[data-toggle="popover"]').popover({
              html: true,
          content: function() {
            return $('#popover-content').html();
          }
        });
    })
    
    /*funcion que muestra el nivel 2 de de las calificaciones*/
    $('.level2').click(function () {
        $(".nivel_2").removeClass("hide");
        $(".nivel_1").addClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });
    
    /*funcion que muestra el nivel 3 de de las calificaciones*/
    $('.level3').click(function () {
        $(".nivel_3").removeClass("hide");
        $(".nivel_2").addClass("hide");
        $(".nivel_1").addClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que muestra el ingreso de una nueva nota*/
    $('.new').click(function () {
        $(".new_nota").removeClass("hide");
        $(".niveles").addClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que muestra editar una nueva nota*/
    $('.edit-nota').click(function () {
        $(".edit_nota").removeClass("hide");
        $(".new_nota").addClass("hide");
        $(".niveles").addClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que muestra ingresar notas examen*/
    $('.new_nota_examen').click(function () {
        $(".nota_exa").removeClass("hide");
        $(".edit_nota").addClass("hide");
        $(".new_nota").addClass("hide");
        $(".niveles").addClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que permite agregar una nueva tarea*/
    $('.new_tarea').click(function () {
        $(".list_tareas").addClass("hide");
        $(".add_tarea").removeClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que devuelve a la lista de tareas*/
    $('.back_list_tarea').click(function () {
        $(".list_tareas").removeClass("hide");
        $(".add_tarea").addClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que devuelve al nivel 1 de de las calificaciones*/
    $('.back_level1').click(function () {
        $(".nivel_2").addClass("hide");
        $(".nivel_1").removeClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que devuelve al nivel 2 de de las calificaciones*/
    $('.back_level2').click(function () {
        $(".niveles").removeClass("hide");
        $(".nota_exa").addClass("hide");
        $(".edit_nota").addClass("hide");
        $(".new_nota").addClass("hide");
        $(".nivel_3").addClass("hide");
        $(".nivel_2").removeClass("hide");
        $(".nivel_1").addClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que devuelve al nivel 3 de de las calificaciones*/
    $('.back_new_nota').click(function () {
        $(".edit_nota").addClass("hide");
        $(".new_nota").addClass("hide");
        $(".niveles").removeClass("hide");
        $(".nivel_3").removeClass("hide");
        $(".nivel_2").addClass("hide");
        $(".nivel_1").addClass("hide");
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    /*funcion que muestra la tabla de calificacioens*/
    if($(window).width() <= 992){
        $('#tablaCalificacionResponsive').removeClass("hide");
        $('#tablaCalificacion').addClass("hide");
        $('#icon_alert').addClass("hide");
    } else{
        $('#tablaCalificacionResponsive').addClass("hide");
        $('#tablaCalificacion').removeClass("hide");
        $('#icon_alert').removeClass("hide");
    }

    /*funcion toggle para ingresar notas*/
    $('#toggleIngresoNota').bootstrapToggle({
        on: '',
        off: ''
    });
    $('#toggleIngresoNota').change(function () {
        $(".active_form").toggle();
        if($('#ingresoMensual').hasClass("disable_input")){
            $('#ingresoMensual').removeClass("disable_input");
            $('#subirArchivo').addClass("disable_input");
            $("#FormControlFile1").prop('disabled', true);
        }else{
            $('#subirArchivo').removeClass("disable_input");
            $("#FormControlFile1").prop('disabled', false);
            $('#ingresoMensual').addClass("disable_input");
        }
    })

    /*Toggle popover*/
    $(function() {
        $('[data-toggle="popoverForm"]').popover({
            container: 'body',
            html: true,
            placement: 'left',
            sanitize: false,
          content: function() {
            return $('#popoverContentForm').html();
          }
        });
    })

    /*Toggle popover citas-aprobar*/
    $(function() {
        $('[data-toggle="popoverCitasAprobar"]').popover({
            container: 'body',
            html: true,
            placement: 'left',
            sanitize: false,
          content: function() {
            return $('.popover-content-citas-aprobar').html();
          }
        });
    });

    /*Toggle popover citas-concretar*/
    $(function() {
        $('[data-toggle="popoverCitasConcretar"]').popover({
            container: 'body',
            html: true,
            placement: 'left',
            sanitize: false,
          content: function() {
            return $('.popover-content-citas-concretar').html();
          }
        });
    });

    /*input datepicker*/
    $(".input_datepicker").datepicker({
        dateFormat: "dd-mm-yy"
    });

    /*input timepicker*/
    $('.input_timepicker').timepicker();

    /*tooltip iconos*/
    $('[data-toggle="tooltip"]').tooltip();

    /*registrar libro de clase*/
     $(".buttonCardLibro").click(function () {
        $("#libroClases").addClass("hide");
        $("#registrarlibro").removeClass("hide")
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    $(".complete").click(function () {
        $("#libroClases").addClass("hide");
        $("#editarlibro").removeClass("hide")
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    $(".backLibro").click(function () {
        $("#libroClases").removeClass("hide");
        $("#registrarlibro").addClass("hide")
        $("#editarlibro").addClass("hide")
        $('html,body').animate({
            scrollTop: $("#sliderOption").offset().top
        }, 500);
    });

    $('#showCompletarLibro').click(function () {
        $(".hide_fila_libro").removeClass("hide");
        $(".show_button_libro").addClass("hide");
    });

    /*add file*/
    $('.file_new').change(function() {
        var id = this.id.replace("addFile_", "");
        var filename = $(this).val().split('\\').pop();
        addFile(id,filename);
    });

    function addFile(id,filename) {
        $('#newFile_'+ id).html(filename).removeClass("nota_green").addClass("nota_pink");
        $('#iconFile_' + id).attr("src", "images/home/icon-red-file.png");

        id = parseInt(id)+1;

        var html = $("#bloqueArchivo").html();

        $("#bloqueArchivo").html(html +
            '<div style="justify-content: initial;" class="center_content">' +
            '<img style="margin: 0 5px;" id="iconFile_'+id+'" src="images/home/icon-gree-file.png" width="32px;">' +
            '<label id="newFile_'+id+'" for="addFile_'+id+'" class="nota_green add_file">Añade archivo</label>' +
            '<input type="file" class="control-file file_new" id="addFile_'+id+'">' +
            '</div>'
        );
        $('.file_new').change(function() {
            var id = this.id.replace("addFile_", "");
            var filename = $(this).val().split('\\').pop();
            addFile(id,filename);
        });
    };
    
    /*tab de componentes*/
    $(".component").click(function () {
        $("#comp_1").removeClass("edit");
        $("#comp_2").removeClass("edit");
        $("#comp_3").removeClass("edit");
        $("#evaluation_1").addClass("hide");
        $("#evaluation_2").addClass("hide");
        $("#evaluation_3").addClass("hide");

        var id = this.id.replace("comp_", "");
        $("#comp_" + id).addClass("edit");
        $("#evaluation_" + id).removeClass("hide");
    });

    $('.js-example-basic-multiple').select2();
});