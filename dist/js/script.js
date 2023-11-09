$(document).ready(function () {
    // Membuat angka random untuk suhu
    function generateRandomTemperature() {
        return (Math.random() * 100).toFixed(2);
    }

    function updateSensorTemperature(sensor) {
        sensor.find('.temperature').text(`Suhu: ${generateRandomTemperature()} °C`);
    }

    // Set interval setiap 1 detik untuk mengganti nilai suhu
    setInterval(function() {
        $('.sensor').each(function() {
            updateSensorTemperature($(this));
        });
    }, 1000);

    // Setiap sensor diberikan tombol dan fungsi delete
    $('.sensor').each(function() {
        const sensor = $(this);
        const deleteButton = $('<button class="btn btn-outline-danger delete-sensor"><i class="fa fa-trash"></i> Hapus Sensor</button>');
        sensor.append(deleteButton);

        deleteButton.click(function() {
            sensor.remove();
        });
    });

    // Membuat sensor baru
    $('.add-sensor').click(function () {
        let namasensor = $("#sensorName").val();
        let warnaSensor = $("#warnaSensor").val();

        const newSensor = $(`
            <div style="border: 1px solid ${warnaSensor}; border-top: 8px solid ${warnaSensor}" class="sensor">
                <h2>Sensor ${namasensor} </h2>
                <p class="temperature">0 °C</p>
                <button class="btn btn-outline-danger delete-sensor">
                    <i class="fa fa-trash"></i> Hapus Sensor
                </button>
            </div>`
        );
        
        $('.sensors').append(newSensor);

        newSensor.find('.delete-sensor').click(function() {
            newSensor.remove();
        });

        $("#sensorName").val("");
    });
});
