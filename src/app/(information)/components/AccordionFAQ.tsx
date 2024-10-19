import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFAQPayment() {
  return (
    <>
      <section className="grid gap-4">
        <h2 className="text-2xl font-bold">PAYMENTS</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="w-full mt-2">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Métodos de pago
            </AccordionTrigger>
            <AccordionContent>
              <p className="-translate-y-1 pb-2">
                Aceptamos los siguientes métodos de pago:
              </p>
              <ul className="w-full grid gap-10 pb-6 text-[.875rem]">
                <li className="w-full h-5">
                  <h5 className="font-semibold">Tarjeta de crédito</h5>
                  <p>
                    Aceptamos la mayoría de las tarjetas de crédito. No hay
                    cargos adicionales cuando paga con tarjeta.
                  </p>
                </li>
                <li className="w-full h-5">
                  <h5 className="font-semibold">Paypal</h5>
                  <p>
                    Los pagos generalmente se acreditan en unos minutos.
                    Recibirá un correo electrónico de confirmación cada vez que
                    realice un pago utilizando Paypal.
                  </p>
                </li>
                <li className="w-full h-5 mt-4">
                  <h5 className="font-semibold">Bancontacto</h5>
                  <p>Disponible en Bélgica</p>
                </li>
                <li className="w-full h-5">
                  <h5 className="font-semibold">IDEAL</h5>
                  <p>Disponible en los Países Bajos</p>
                </li>
                <li className="w-full h-5">
                  <h5 className="font-semibold">Klarna Pagar Más tarde</h5>
                  <p>
                    Disponible en Austria, Dinamarca, Finlandia, Alemania,
                    Países Bajos, Noruega, Suecia y Reino Unido
                  </p>
                </li>
                <li className="w-full h-5">
                  <h5 className="font-semibold">Klarna Pagar Ahora</h5>
                  <p>Disponible en Austria, Alemania, Países Bajos y Suecia</p>
                </li>
                <li className="w-full h-5">
                  <h5 className="font-semibold">Klarna Slice It</h5>
                  <p>
                    Disponible en Dinamarca, Finlandia, Alemania, Noruega y
                    Suecia
                  </p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Impuestos y derechos
            </AccordionTrigger>
            <AccordionContent className="text-[.875rem]">
              Todos los pedidos se entregan DDP (Delivered Duty Paid), lo que
              significa que todos los impuestos y aranceles locales están
              incluidos en el precio que se muestra al finalizar la compra.
              <br />
              <br />
              El IVA sueco se ha deducido para pedidos a Gran Bretaña, Noruega y
              Suiza.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Reembolsos
            </AccordionTrigger>
            <AccordionContent className="text-[.875rem]">
              Le notificaremos una vez que hayamos recibido y procesado su
              devolución. Nuestro tiempo de manejo para devoluciones es de
              alrededor de 5 días de trabajo a la llegada. Si todo ha sido
              aprobado, se le reembolsará automáticamente en su método de pago
              original dentro de los 10 días hábiles.
              <br />
              <br />
              Puede tomar algún tiempo para que su banco o compañía de tarjeta
              de crédito procese el reembolso. Si han pasado más de 15 días
              hábiles desde que aprobamos su devolución, contáctenos en
              <span className="underline text-[#75827b]"> info@elvine.se</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}

export function AccordionFAQShipping() {
  return (
    <>
      <section className="grid gap-4">
        <h2 className="text-2xl font-bold">SHIPPING AND RETURNS</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Tarifa de envío
            </AccordionTrigger>
            <AccordionContent className="text-[.875rem]">
              Ofrecemos envío gratuito para pedidos enviados a Suecia.
              <br />
              <br />
              Para los países de la UE, tenemos envío gratuito para pedidos
              superiores a EUR 100 o el equivalente en su moneda local. Para los
              pedidos a continuación, nuestra tarifa de envío es de EUR 5 o el
              equivalente en su moneda local.
              <br />
              <br />
              Si es de Gran Bretaña, Noruega y Suiza, su tarifa de envío se
              calculará al finalizar la compra.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Tiempo de entrega
            </AccordionTrigger>
            <AccordionContent className="text-[.875rem]">
              Tenemos la ambición de enviar su pedido dentro de las 24 horas
              posteriores a la recepción de su pedido. El tiempo normal de
              entrega es entre 2-4 días hábiles. El tiempo de entrega varía
              según su país de residencia, la magnitud de su pedido, así como
              los esfuerzos de sus servicios postales o UPS locales.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Impuestos y derechos
            </AccordionTrigger>
            <AccordionContent className="text-[.875rem]">
              Todos los pedidos se entregan DDP (Delivered Duty Paid), lo que
              significa que todos los impuestos y aranceles locales están
              incluidos en el precio que se muestra al finalizar la compra.
              <br />
              <br />
              El IVA sueco se ha deducido para pedidos a Gran Bretaña, Noruega y
              Suiza.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Entrega fallida
            </AccordionTrigger>
            <AccordionContent className="text-[.875rem]">
              Si los paquetes/cartas se devuelven debido a una entrega fallida,
              nos reservamos el derecho de cobrar el costo total del flete de
              devolución. Las razones para la entrega fallida son las
              siguientes:
              <br />
              <br />
              - El destinatario se ha mudado
              <br />
              <br />
              - Sin respuesta
              <br />
              <br />
              - Dirección incompleta
              <br />
              <br />
              - Dirección inaccesible (Dirección desconocida)
              <br />
              <br />- Negativa a aceptar el paquete/carta
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Devolución
            </AccordionTrigger>
            <AccordionContent className="text-[.875rem]">
              Tiene derecho a devolver o cambiar el producto dentro de los 14
              días posteriores a la recepción, siempre que no haya utilizado el
              producto y se devuelva sin daños. Al devolver o intercambiar un
              producto fuera de Suecia, usted es responsable de los costos de
              envío, con la excepción de entregas incorrectas o daños en el
              transporte.
              <br />
              <br />
              Si desea devolver un producto, siga las instrucciones en el
              formulario con su pedido. La Ley de Compra del Consumidor se
              aplica al manejar las quejas. El acuerdo a distancia cesa
              automáticamente una vez que se ha ejercido el derecho de cancelar
              una compra para un pedido en particular. Al devolver o
              intercambiar un producto, usted asume el costo y el riesgo de
              devolver el producto.
              <br />
              <br />
              Para devolver un producto rellene el formulario de devolución
              adjunto con la entrega y devuelva el paquete a:
              <br />
              <br />
              AB Elvine Tex Press Logistik
              <br />
              <br />
              Kriptongatan 14
              <br />
              <br />
              431 53 Mölndal Suecia
              <br />
              <br />
              Puede utilizar cualquier compañía de carga de su elección para
              hacer su elección para hacer su devolución. Solo recuerde guardar
              el número de seguimiento de su paquete para vigilar su devolución.
              No aceptamos paquetes enviados en efectivo a la entrega.
              <br />
              <br />
              Los reembolsos por los artículos devueltos se realizarán a más
              tardar 14 días a partir del momento en que recibimos y aprobamos
              la devolución. momento en que recibimos y aprobamos la devolución.
              El cliente asume el costo directo de devolver la mercancía, pero
              se le reembolsarán los costos de envío originales.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-[.875rem] font-semibold">
              Derecho de desistimiento
            </AccordionTrigger>
            <AccordionContent className="text-[.875rem]">
              Tiene derecho a rescindir su contrato dentro de los 14 días sin
              dar ninguna razón. El período de retiro expirará después de 14
              días después de la recepción de su pedido.
              <br />
              <br />
              Si devuelve un artículo no utilizado dentro de los 14 días, le
              reembolsaremos todos los pagos recibidos de usted. Si se utiliza
              el producto, le cobraremos por cualquier valor disminuido de los
              productos. Los reembolsos se realizarán a más tardar 14 días a
              partir del momento en que recibimos su devolución.
              <br />
              <br />
              Si desea ejercer el derecho de desistimiento, puede notificarnos a
              Elvine AB, ya sea por correo electrónico o rellenando el siguiente
              formulario de desistimiento.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}

export function AccordionFAQGeneralTerms() {
  return (
    //le ponemos un scroll para que se pueda ver todo el texto
    <section className="w-full h-dvh py-10 overflow-y-auto">
      <p className="text-[.875rem]">
        <strong className="text-2xl">Términos Generales</strong>
        <br />
        <br />
        Debe tener más de 18 años o tener permiso de un padre o tutor para
        comprar en elvine.se. Al pedirnos productos, usted ingresa un acuerdo de
        compra con nosotros. Todos los productos en nuestra página de inicio son
        artículos de stock para entrega inmediata. Todos nuestros precios
        incluyen IVA dentro de la UE. Si realiza un pedido desde fuera de la UE,
        no se cobra IVA sueco. Al devolver o intercambiar un producto fuera de
        Suecia, usted es responsable de los costos de envío, con la excepción de
        entregas incorrectas o daños en el transporte. Elvine.se hace reservas
        para cualquier error de impresión en esta página web. Nuestro objetivo
        es que todos nuestros productos sean lo más realistas posible en
        términos de proporciones y colores, pero no podemos garantizar que todas
        las imágenes reproduzcan la apariencia exacta de los productos.
        <br />
        <br />
        <strong>Retirada</strong>
        <br />
        <br />
        Tiene derecho a rescindir su contrato dentro de los 14 días sin dar
        ninguna razón. El período de retiro expirará después de 14 días después
        de la recepción de su pedido. Si devuelve un artículo no utilizado no
        utilizado dentro de los 14 días, le reembolsaremos todos los pagos
        recibidos de usted. Si se utiliza el producto, le cobraremos por
        cualquier valor disminuido de los productos. Los reembolsos se
        realizarán a más tardar 14 días a partir del momento en que recibimos y
        aprobamos su devolución.
        <br />
        <br />
        Si desea ejercer el derecho de desistimiento, puede notificarnos a
        Elvine AB, ya sea por correo electrónico o rellenando este formulario
        rellenando este formulario de desistimiento.
        <br />
        <br />
        <strong>Quejas</strong>
        <br />
        <br />
        Las quejas deben solicitarse lo antes posible después de recibir el
        producto y a más tardar 14 días después de la recepción. Si el motivo de
        la queja se debe a Elvine, pagaremos cualquier costo adicional. Si el
        motivo de la queja se debe a una compra incorrecta o de alguna otra
        manera debido al cliente, y el producto está libre de fallas o en venta,
        el cliente es responsable de cualquier costo adicional. Una vez que
        recibamos el producto y la queja haya sido aprobada, le enviaremos un
        nuevo producto y le reembolsaremos el franqueo o lo que ha pagado por el
        producto más el franqueo. La Ley de Compra del Consumidor se aplica al
        manejo de quejas. Para saber qué reglas se aplican en el marco de esta
        ley, visite www.konsumentverket.se.
        <br />
        <br />
        <strong>Fuerza mayor</strong>
        <br />
        <br />
        Si se produce alguno de los siguientes, Elvine AB está exento de cumplir
        con el acuerdo. Esto se aplica en caso de circunstancias fuera de
        nuestro control: huelgas, guerra, estado de emergencia nacional,
        sabotaje, desastres naturales, una recesión anormal en el mercado,
        medidas tomadas por un gobierno nacional y si la empresa está expuesta a
        actividades delictivas, un accidente grave o bloqueo.
        <br />
        <br />
        <strong>Daños en el transporte</strong>
        <br />
        <br />
        Si descubre que el paquete se ha dañado cuando lo recoge en la Oficina
        de Correos, debe informarlo inmediatamente a la Oficina de Correos. Si
        descubre daños más tarde, envíe un correo electrónico a nuestros
        Servicios al Cliente a info@elvine.se. Para devoluciones de clientes, el
        cliente es responsable de cualquier daño durante el transporte.
        <br />
        <br />
        <strong>Detalles de la empresa</strong>
        <br />
        <br />
        AB Elvine Första L gastgatan 4 413 Göteborg 04 Suecia Tel: +46 703 150
        180
        <br />
        <br />
        correo electrónico: info@elvine.se
        <br />
        <br />
        Número de registro de la empresa: 556540-9215
        <br />
        <br />
        IVA NO. SE556540921501
        <br />
        <br />
        CEO: Johan Johnsén
      </p>
    </section>
  );
}

export function AccordionFAQPrivacyPolicy() {
  return (
    <section className="w-full h-dvh py-10 overflow-y-auto">
      <p className="text-[.875rem]">
        <strong className="text-2xl">Política de privacidad</strong>
        <br />
        <br />
        Elvine AB, org. no. 556540-9215, Första L gasggatan 4, 413 03 Göteborg
        (”Elvine”) procesa datos personales de acuerdo con la legislación
        aplicable, incluido el Reglamento General de Protección de Datos de la
        UE. Los términos “nosotros, nuestro, nuestro y us” a continuación se
        refieren a Elvine.
        <br />
        <br />
        Elvine se esfuerza por ser completamente transparente con qué datos
        personales maneja Elvine y con qué fines. Por lo tanto, le pedimos que
        revise esta política de privacidad, que describe nuestro procesamiento
        privacidad, que describe nuestro procesamiento de sus datos y sus
        derechos por ley. Si tiene alguna pregunta sobre nuestro procesamiento
        de su información personal, no dude en contactarnos. Puede encontrar
        nuestra información de contacto en el punto 6 a continuación.
        <br />
        <br />
        <strong>1 ¿QUÉ DATOS PERSONALES PROCESAMOS?</strong>
        <br />
        <br />
        Datos personales que recopilamos de usted:
        <br />
        <br />
        - Nombre,
        <br />
        <br />
        - Información de contacto, como dirección de entrega, país, número de
        teléfono, dirección de correo electrónico
        <br />
        <br />
        - Historial de pedidos, como información sobre el artículo que compró,
        fecha y hora de la transacción, dirección de facturación, método de pago
        elegido y otra información relacionada con su compra
        <br />
        <br />
        - Información sobre sus contactos con nosotros, por ejemplo, por
        teléfono, correo electrónico, chat y otros canales como las redes
        sociales
        <br />
        <br />
        - Información relacionada con reclamaciones o uso del derecho de
        desistimiento,
        <br />
        <br />
        - Información en su concurso de contribución.
        <br />
        <br />
        En los casos en que no obtenemos los datos personales mencionados
        directamente de usted, accedemos a ellos a través de nuestros socios.
        Elvine también puede recibir información sobre usted de los proveedores
        de servicios de pago y las compañías de envío de Elvineine con respecto
        al pago y la entrega de sus pedidos.
        <br />
        <br />
        Elvine puede recibir información del correo electrónico y otra
        correspondencia que contenga datos personales de terceros, por lo que
        Elvine procesa dichos datos personales. Si es necesario, Elvine le
        informará como tercero sobre el procesamiento de dichos datos.
        <br />
        <br />
        <strong>
          2 ¿POR QUÉ PROCESAMOS SUS DATOS PERSONALES Y QUÉ BASE LEGAL TENEMOS
          PARA EL PROCESAMIENTO?
        </strong>
        <br />
        <br />
        Para la gestión de las relaciones y pedidos de los clientes Procesamos
        nombres, información de contacto, historial de pedidos y detalles de sus
        contactos con nosotros para administrar sus pedidos y devoluciones, y
        para poder cumplir con nuestros compromisos con usted. Esto incluye,
        entre otras cosas, permitirle ordenar nuestros productos y crear una
        cuenta en nuestro sitio web donde, por ejemplo, puede ver pedidos
        anteriores, y para que podamos crear y enviar confirmaciones de pedidos
        y notificaciones sobre el estado de entrega y los problemas de entrega,
        así como empaquetar y entregar productos pedidos. La base legal para el
        procesamiento de sus datos personales en esta sección es que es
        necesario cumplir con nuestro acuerdo con usted o tomar medidas antes de
        que se concluya nuestro acuerdo. Si no proporciona los datos personales
        mencionados anteriormente,no tenemos la oportunidad de ofrecer y
        entregar nuestros servicios y productos o cumplir con nuestros
        compromisos con usted.
        <br />
        <br />
        <i>Para proporcionar servicio al cliente</i>
        <br />
        Procesamos nombres, información de contacto e historial de pedidos para
        poder manejar problemas de servicio al cliente y brindarle un buen
        servicio, como responder preguntas de usted y brindar atención al
        cliente por teléfono, correo electrónico, chat u otros canales, como
        redes sociales. La base legal para nuestro procesamiento en esta sección
        es que es necesario para nuestro interés legítimo satisfacer sus
        necesidades y brindarle el mejor servicio posible. Por lo tanto, nuestro
        interés en procesar sus datos personales para este fin precede su
        posible interés en proteger su integridad personal.
        <br />
        <br />
        <i>Para la garantía de calidad de nuestro negocio</i>
        <br />
        Procesamos nombres, información de contacto, historial de pedidos e
        información sobre sus contactos con nosotros para garantizar la calidad
        de nuestro negocio, optimizar nuestro sitio web y nuestros servicios,
        así como capacitar a nuestro personal. La base legal para nuestro
        procesamiento en esta sección es que es necesario que nuestro interés
        legítimo satisfaga sus necesidades, le brinde el mejor servicio posible
        y desarrolle nuestro negocio. Por lo tanto, nuestro interés en procesar
        sus datos personales para este fin precede su posible interés en
        proteger su integridad personal.
        <br />
        <br />
        <i>Para promociones y concursos</i>
        <br />
        Procesamos nombres, información de contacto, información sobre sus
        contactos con nosotros e información sobre su contribución al concurso
        para permitirle participar en nuestras campañas y concursos en, por
        ejemplo, redes sociales y así poder ganar excelentes precios. La base
        legal para nuestro procesamiento de sus datos personales para este
        propósito es que es necesario que nuestro interés legítimo pueda
        proporcionarle promociones y concursos. Nuestro interés en procesar su
        información personal para este propósito precede su posible interés en
        proteger su integridad personal.
        <br />
        <br />
        <i>Para marketing</i>
        <br />
        Procesamos nombres, información de contacto e información sobre sus
        contactos con nosotros para informarle sobre nuestros productos y
        servicios. Por ejemplo, podemos enviarle ofertas promocionales
        relevantes, siempre que haya aceptado activamente recibir dichos
        mensajes. Dichos mensajes se envían por correo electrónico. La base
        legal para el procesamiento de sus datos personales para este propósito
        es que es necesario para nuestro interés legítimo poder comercializar
        productos y servicios que creemos que pueden interesarle. Nuestro
        interés en procesar sus datos personales para este fin precede su
        posible interés en proteger su integridad personal. Si no ha aceptado
        recibir ofertas promocionales, por supuesto, no le enviaremos dichas
        ofertas.
        <br />
        <br />
        <i>Para manejar quejas, devoluciones, etc.</i>
        <br />
        Procesamos nombres, información de contacto, historial de pedidos,
        información sobre sus contactos con nosotros e información relacionada
        con quejas o uso de su derecho de desistimiento, para manejar su posible
        solicitud de devolución de productos o para hacer uso de sus derechos de
        consumidor. La base legal para nuestro procesamiento en esta parte es
        que es necesario cumplir con nuestro acuerdo y cumplir con las
        obligaciones legales establecidas en la legislación del consumidor.
        <br />
        <br />
        <i>Para estadísticas</i>
        <br />
        Procesamos nombres, información de contacto, historial de pedidos,
        información sobre sus contactos con nosotros e información relacionada
        relacionada con quejas o uso del derecho de desistimiento con el fin de
        obtener estadísticas y análisis sobre nuestro negocio y nuestros
        productos y servicios. La base legal para el procesamiento de sus datos
        personales es que es necesario para nuestro interés legítimo evaluar la
        calidad de nuestros productos y servicios a lo largo del tiempo y
        desarrollarlos para el futuro. Nuestro interés en procesar su
        información personal para este propósito precede su posible interés en
        proteger su integridad personal.
        <br />
        <br />
        <i>Para fines contables</i>
        <br />
        Para fines contables, procesamos información sobre la transacción entre
        Elvine y usted, en relación con el pedido que ha realizado. Por lo
        tanto, procesaremos su nombre, información de contacto e historial de
        pedidos. La base legal para nuestro procesamiento de sus datos
        personales para este propósito es que es necesario para cumplir con una
        obligación legal que se aplica a nosotros.
        <br />
        <br />
        <strong>
          3 ¿A QUIÉN DIVULGAMOS SUS DATOS PERSONALES Y DÓNDE LOS PROCESAMOS
          GEOGRÁFICAMENTE?
        </strong>
        <br />
        <br />
        Sus datos personales pueden ser revelados y procesados por otros. Los
        terceros a quienes divulgamos sus datos personales son, por ejemplo,
        despachadores en relación con la entrega de bienes, proveedores de
        servicios de pago y bufetes de abogados que manejan problemas legales en
        nuestro negocio.
        <br />
        <br />
        También divulgamos sus datos personales a nuestros socios y a nuestros
        proveedores de servicios que procesan datos personales en nuestro
        nombre, los llamados procesadores de datos. Tenemos acuerdos con
        nuestros procesadores de datos que aseguran que procesan sus datos
        personales de acuerdo con esta política y nuestras instrucciones.
        <br />
        <br />
        También podemos divulgar sus datos personales a las autoridades que nos
        requieran proporcionar dichos datos personales. También podemos divulgar
        sus datos personales para permitir una fusión, una adquisición o una
        venta de la totalidad o parte de los activos de Elvinein.
        <br />
        <br />
        En general, los colaboradores de Elvine y Elvineinys procesan sus datos
        personales solo dentro de la UE y el EEE. En caso de que los datos
        personales se procesen fuera de la UE y el EEE, Elvine tomará medidas
        para garantizar que los datos personales continúen protegidos y también
        tomará todas las medidas necesarias para garantizar una transferencia
        legal de datos personales a países fuera de la UE y el EEE.
        <br />
        <br />
        <strong>
          4 ¿CUÁNTO TIEMPO PROCESAREMOS SUS DATOS PERSONALES PARA LOS DIFERENTES
          FINES?
        </strong>
        <br />
        <br />
        Solo procesamos datos personales siempre que sea necesario conservarlos
        para cumplir con los fines para los que se proporcionaron o recopilaron
        los datos. Los mismos datos personales se pueden almacenar en varios
        lugares diferentes para diferentes propósitos. Esto significa que la
        información que se ha eliminado de un sistema porque ya no era necesaria
        para ese propósito puede permanecer en otro sistema donde se almacena en
        función del consentimiento o para otro propósito para el cual aún se
        requieren los datos personales.
        <br />
        <br />
        Datos personales procesados por Elvine con el fin de gestión de
        relaciones y pedidos de clientes se guarda hasta que se realice su
        pedido y durante un período de tres meses a partir de entonces. Si tiene
        una cuenta registrada con nosotros, los datos se guardarán durante tres
        años después de realizar su pedido.
        <br />
        <br />
        Datos personales procesados para proporcionar servicio al cliente de
        nosotros, procesaremos sus datos personales para este propósito hasta
        que se dé de baja o nos notifique que no desea más mensajes de marketing
        directo de nosotros. se guarda durante un año después de completar la
        compra. La información y la correspondencia sobre asuntos de servicio al
        cliente se guardan un año después de completar el asunto de servicio al
        cliente.
        <br />
        <br />
        Los datos personales que procesamos sobre usted para la calidad asegura
        nuestro negocio se guarda por un año.
        <br />
        <br />
        Datos personales que procesamos para promociones y concursos se guarda
        hasta que se complete la campaña o competencia actual.
        <br />
        <br />
        Si ha aceptado recibir marketing directo y boletines
        <br />
        <br />
        Datos personales que procesamos para manejo de quejas, devoluciones,
        etc. se procesa durante el tiempo que nosotros, por ley o por nuestro
        acuerdo con usted, tenemos estas obligaciones legales hacia usted y
        hasta tres años después de la última compra.
        <br />
        <br />
        Datos personales procesados por Elvine para propósito contables se
        ahorra durante siete años a partir del final del año calendario en el
        que finalizó el año financiero correspondiente.
        <br />
        <br />
        Sus datos personales pueden guardarse durante un período de tiempo más
        largo que el indicado anteriormente si es necesario para cumplir con los
        requisitos legales o las decisiones de las autoridades oficiales.
        <br />
        <br />
        <strong>5 TUS DERECHOS</strong>
        <br />
        <br />
        Cuando procesamos sus datos personales, usted tiene ciertos derechos por
        ley. Tenga en cuenta que el ejercicio de estos derechos está sujeto a
        ciertos requisitos y condiciones especificados en la ley (el Reglamento
        General de Protección de Datos de la UE).
        <br />
        <br />
        5.1 Derecho a la información y al acceso
        <br />
        Usted tiene derecho, sin costo alguno, a solicitar por escrito
        información sobre los datos personales que procesamos sobre usted. Si
        procesamos sobre usted.
        <br />
        <br />
        Si no tiene motivos para su solicitud o si su solicitud no es razonable,
        por ejemplo, si solicita la extracción o eliminación con frecuencia y a
        intervalos cortos, podemos negarnos a cumplir con su solicitud o cobrar
        una tarifa que cubra los costos administrativos que implica su
        solicitud.
        <br />
        <br />
        5.2 Derecho de corrección y eliminación
        <br />
        Si sus datos personales son incorrectos o incompletos, tiene derecho a
        solicitar que corrijamos o complementemos dichos datos personales.
        <br />
        <br />
        Tiene derecho a solicitar la eliminación de sus datos personales en
        determinadas circunstancias (que se establecen en el Reglamento General
        de Protección de Datos de la UE). Siempre que su solicitud se encuentre
        dentro de cualquiera de estas circunstancias, eliminaremos su
        información.
        <br />
        <br />
        5.3 Derecho a oponerse al marketing directo
        <br />
        En cualquier momento puede oponerse a nuestro manejo de sus datos
        personales con fines de marketing directo o la elaboración de perfiles
        de usted para dichos fines. Si no desea que procesemos sus datos
        personales para estos fines, infórmenos poniéndose en contacto con
        nosotros a través de nuestros datos de contacto que se enumeran a
        continuación, consulte el punto 6. Luego descontinuaremos el
        procesamiento de sus datos personales para estos fines.
        <br />
        <br />
        5.4 Derecho a un procesamiento limitado
        <br />
        Bajo ciertas circunstancias especificadas en el Reglamento General de
        Protección de Datos de la UE, tiene derecho a exigir que el
        procesamiento de sus datos personales sea limitado. Si tiene derecho a
        esto, dichos datos personales, con excepción del almacenamiento, se
        procesarán solo con su consentimiento, o para determinar, hacer cumplir
        o defender reclamos legales o para proteger cualquier otro derecho de
        persona física o legal o por razones relacionadas con un interés público
        importante.
        <br />
        <br />
        5.5 Derecho a la portabilidad de datos
        <br />
        Tiene derecho a recibir los datos personales que procesamos sobre usted
        en un formato estructurado, generalmente utilizado y legible por
        máquina, y tiene derecho a transferir esta información a otro
        controlador de datos cuando sea técnicamente posible.
        <br />
        <br />
        5.6 Derecho a presentar quejas
        <br />
        Si no está satisfecho con la forma en que procesamos sus datos
        personales, contáctenos, consulte nuestra información de contacto en el
        punto 6. También tiene derecho a presentar quejas sobre el procesamiento
        de sus datos personales a:
        <br />
        <br />
        Autoridad Sueca de Protección de Datos (sw: Datainspektionen) Recuadro
        8114 104 20 Estocolmo dirección@datainspektionen.se
        <br />
        <br />
        <strong>6 CONTACTA CON ELVINE</strong>
        <br />
        <br />
        Puede contactarnos de la siguiente manera:
        <br />
        <br />
        - vía e-mail info@elvine.se, - por contactarnos de la siguiente manera:
        <br />
        <br />
        - vía e-mail info@elvine.se,
        <br />
        <br />
        - por teléfono +46 703 150 180,
        <br />
        <br />
        escribiendo una carta o visitándonos en
        <br />
        <br />
        AB Elvine, Första L gastgatan 4 413 Göteborg 03 Suecia
        <br />
        <br />
        Tenemos derecho a cambiar unilateralmente esta política de privacidad.
        <br />
        <br />
        Cualquier cambio que realicemos entrará en vigencia no antes de 30 días
        después de que la política de privacidad ajustada se haya puesto a su
        disposición en nuestro sitio web o publicando de nosotros. política de
        privacidad ajustada se haya puesto a su disposición en nuestro sitio web
        o publicando de nosotros.
      </p>
    </section>
  );
}

export function AccordionFAQCookiePolicy() {
  return (
    <section className="w-full h-dvh py-10 overflow-y-auto">
      <p className="text-[.875rem]">
        <strong className="text-2xl">Política de cookies</strong>
        <br />
        <br />
        Utilizamos cookies en este sitio web. Una cookie es un pequeño archivo
        de texto almacenado en su computadora o dispositivo móvil que contiene
        información. Utilizamos cookies para mejorar nuestro sitio y su
        experiencia de compra.
        <br />
        <br />
        <strong className="text-lg">Tipos de cookies</strong>
        <br />
        <br />
        <strong>Cookies estrictamente requeridas</strong>
        <br />
        Estas cookies son necesarias para que el sitio web se ejecute y no se
        pueden desactivar. Dichas cookies solo se establecen en respuesta a
        acciones realizadas por usted, como idioma, moneda, sesión de inicio de
        sesión, preferencias de privacidad. Puede configurar su navegador para
        bloquear estas cookies, pero esto podría afectar la forma en que
        funciona nuestro sitio.
        <br />
        <br />
        <strong>Análisis y estadísticas</strong>
        <br />
        Estas cookies nos permiten medir el tráfico de visitantes y ver las
        fuentes de tráfico mediante la recopilación de información en los
        conjuntos de datos. También nos ayudan a entender qué productos y
        acciones son más populares que otros.
        <br />
        <br />
        <strong>Marketing y retargeting</strong>
        <br />
        Estas cookies generalmente son establecidas por nuestros socios de
        marketing y publicidad. Pueden ser utilizados por ellos para crear un
        perfil de su interés y luego mostrarle anuncios relevantes. Si no
        permite estas cookies, no experimentará anuncios específicos de sus
        intereses.
        <br />
        <br />
        <strong>Cookies funcionales</strong>
        <br />
        Estas cookies permiten que nuestro sitio web ofrezca funciones
        adicionales y configuraciones personales. Pueden ser establecidos por
        nosotros o por proveedores de servicios externos que hemos colocado en
        nuestras páginas. Si no permite estas cookies, es posible que estos o
        algunos de estos servicios no funcionen correctamente.
        <br />
        <br />
        <strong className="text-lg">Preferencias de cookies</strong>
        <br />
        <br />
        Antes de configurar las cookies, le pedimos amablemente su permiso. En
        su visita inicial con un dispositivo, encontrará un banner emergente
        donde puede administrar sus preferencias de cookies. Se almacenarán sus
        preferencias seleccionadas y solo se utilizarán las cookies a las que
        haya dado su consentimiento.
        <br />
        <br />
        Las cookies esenciales, como se mencionó anteriormente, están exentas de
        requerir consentimiento. Sus preferencias son específicas del
        dispositivo actual; por lo tanto, es necesario reconfigurar las
        preferencias cuando se utiliza un dispositivo diferente. Por lo general,
        puede ajustar la configuración de almacenamiento de cookies en su
        navegador, como bloquear todas las cookies o permitir solo las de
        origen. Sin embargo, tenga en cuenta que deshabilitar o bloquear las
        cookies esenciales puede afectar la funcionalidad de nuestro sitio web.
      </p>
    </section>
  );
}
