let guion=[
    {   id:1,
        titulo:"The Wall is Bleeding",
        content:[{img:"prueba screen wall.png",imgClass:"imagenuno",
                  texto:[
                    {mensaje:"empezar a{btn1} ",top:50,left:50,class:""},
                    {mensaje:"[ ignorar el{btn2}]",top:70,left:50,class:"texto"},
                    {mensaje:"The Wall is Bleeding",top:20,left:50,class:""},
                ]}],
        acciones:[{cod:"btn1",nombre:"investigar que ocurre",id:2,clase:"sangre"},
                  {cod:"btn2",nombre:"problema",id:5}
                ]
    },
    {   id:2,
        content:[{img:"grieta.png",imgClass:"imagenuno",
                 texto:[
                    {mensaje:"si te acercas, puedes observar de donde proviene",top:50,left:30,class:"texto"},
                    {mensaje:"parece una {btn1}",top:60,left:50,class:""},
                    {mensaje: "[ no tengo tiempo para {btn2}]",top:85,left:40,class:"texto"},
                ]}],
        acciones:[{cod:"btn1",nombre:"grieta ",id:3,clase:"sangre"},
                  {cod:"btn2",nombre:"esto",id:1}
                ]
    },
    {   id:3,
        content:[{img:"sangre brota.png",imgClass:"imagenuno",
        texto:[
            {mensaje:"la sangre no para de brotar",top:40,left:70,class:""},
            {mensaje:"¿qué planeas hacer?",top:50,left:60,class:"texto"},
            {mensaje:"-voy a{btn1}",top:60,left:40,class:""},
            {mensaje:"-prefiero{btn2}",top:70,left:60,class:"texto"},
        ]}],
        acciones:[{cod:"btn1",nombre:"indagar a profundidad",id:4,clase:"sangre"},
                  {cod:"btn2",nombre:"taparlo con cinta",id:5},
                ]
    },
    {   id:4,
        content:[{img:"negro.png",imgClass:"imagen",
        texto:[
            {mensaje:"parece que el problema",top:30,left:40,class:"texto2"},
            {mensaje:"es{btn1}",top:35,left:60,class:"texto2"}
        ]}],
        acciones:[{cod:"btn1",nombre:"estructural",id:6,clase:"blanco"},
                ]
    },
    {   id:5,
        content:[{img:"pantalla fin.png",imgClass:"imagen",
             texto:[
              {mensaje:"La grieta no desaparece",top:30,left:30,class:""},
              {mensaje:"aunque intentes esconderla",top:40,left:45,class:"texto"},
              {mensaje:"ella siempre",top:50,left:55,class:"texto"},
              {mensaje:"{btn1}",top:60,left:65,class:""}
        ]}],
        acciones:[{cod:"btn1",nombre:"resurge",id:1,clase:"blanco"},
                ]
    },
    {   id:6,
        content:[{img:"pantalla fin.png",imgClass:"imagen",
        texto:[
            {mensaje:"{btn1}",top:40,left:50,class:""},
            {mensaje:"no puedes ignorar la falla",top:50,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:52,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:54,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:56,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:58,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:60,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:62,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:64,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:66,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:68,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:70,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:72,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:74,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:76,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:78,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:80,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:82,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:84,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:86,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:88,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:90,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:92,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:94,left:50,class:"texto"},
            {mensaje:"no puedes ignorar la falla",top:96,left:50,class:"texto"}
        ]}],
        acciones:[{cod:"btn1",nombre:"destruye la pared",id:7}
    ]
    },
    {   id:7,
        content:[{img:"blanco.png",imgClass:"imagenuno",
        texto:[
            {mensaje:"a veces la única opción",top:10,left:50,class:"texto"},
            {mensaje:"es{btn1}",top:70,left:50,class:""},
             ]}],
        acciones:[{cod:"btn1",nombre:"reconstruir",id:1}
    ]
    },
]