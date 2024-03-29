function Agendamento(){
    var clazz = {

        para : function(consulta){
            var umDiaEmMilisegundos = 1000 * 60 * 60 * 24;

            var vinteDiasEmMilisegundos = umDiaEmMilisegundos * 20;

            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMilisegundos);

            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);

            while(novaData.getDay() == 0 || novaData.getDay() == 6) novaData = new Date(novaData.getTime() + umDiaEmMilisegundos);

            return novaConsulta;
        }

    };

    return clazz;
}