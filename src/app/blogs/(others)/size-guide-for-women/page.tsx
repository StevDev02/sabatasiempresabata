import Link from "next/link";

export default function SizeGuideForWomenPage() {
  return (
    <>
      <main className="h-[170dvh] mt-16 w-full grid place-items-center text-chocolate">
        <div className="w-[661px] grid gap-4">
          <h1 className="text-3xl font-bold">Guía de tallas para Mujeres</h1>
          <p className="text-sm">
            Use los gráficos a continuación para encontrar el mejor tamaño para
            usted. Las mediciones más importantes para ayudar a guiarte eres tu
            medición de pecho y tu altura. Si su altura es de 164 cm o más
            corta, puede elegir un tamaño más pequeño de lo recomendado
            dependiendo del ajuste deseado. Si necesita más ayuda, no dude en
            ponerse en contacto con nuestro equipo de servicio al cliente en:
            info@elvine.se. Nuestros tamaños se basan en una guía general
            europea de tallas.
          </p>
        </div>
        <table className="text-sm w-[680px]">
          <thead>
            <tr className="grid ml-6 pb-6 text-end grid-cols-9">
              <th className="text-transparent"></th>
              <th className="translate-x-1">XXS</th>
              <th className="translate-x-1">XS</th>
              <th className="-translate-x-1">S</th>
              <th className="translate-x-1">M</th>
              <th className="translate-x-1">L</th>
              <th className="translate-x-3">XL</th>
              <th className="translate-x-5">XXL</th>
            </tr>
          </thead>
          <tbody className="grid">
            <tr className="grid grid-cols-9 bg-[#ededee] h-[53px] items-center">
              <td className="translate-x-8">A. Pecho (cm)</td>
              <td></td>
              <td>74</td>
              <td>80</td>
              <td>86</td>
              <td>92</td>
              <td>98</td>
              <td>104</td>
              <td>110</td>
            </tr>
            <tr className="grid grid-cols-9 h-[53px] items-center">
              <td className="translate-x-8">B. Cintura (cm)</td>
              <td></td>
              <td>58</td>
              <td>64</td>
              <td>70</td>
              <td>76</td>
              <td>82</td>
              <td>88</td>
              <td>94</td>
            </tr>
            <tr className="grid grid-cols-9 bg-[#ededee] h-[53px] items-center">
              <td className="translate-x-8">C. Asiento (cm)</td>
              <td></td>
              <td>83</td>
              <td>89</td>
              <td>95</td>
              <td>101</td>
              <td>107</td>
              <td>113</td>
              <td>119</td>
            </tr>
          </tbody>
        </table>
        <div className="w-[661px] grid gap-4">
          <p className="text-sm">
            Las mediciones deben tomarse directamente en su cuerpo.
          </p>
          <ul>
            <li>
              <p className="text-sm">
                A. Pecho. Mida alrededor de la parte más completa del pecho.
              </p>
            </li>
            <li>
              <p className="text-sm">
                B. Cintura. Mida alrededor de la cintura natural en la parte más
                pequeña de la cintura.
              </p>
            </li>
            <li>
              <p className="text-sm">
                C. Asiento. De pie con las piernas juntas, mida alrededor de la
                parte más completa del asiento.
              </p>
            </li>
          </ul>
          <p className="text-sm">
            <br />
            Guía de pantalones:
          </p>
        </div>
        <table className="text-sm w-[680px]">
          <tbody className="grid">
            <tr className="grid grid-cols-9 h-[53px] items-center">
              <td className="translate-x-8"></td>
              <td></td>
              <td>32</td>
              <td>34</td>
              <td>36</td>
              <td>38</td>
              <td>40</td>
              <td>42</td>
              <td>44</td>
            </tr>

            <tr className="grid grid-cols-9 bg-[#ededee] h-[53px] items-center">
              <td className="translate-x-8">Cintura (cm)</td>
              <td></td>
              <td>68</td>
              <td>72</td>
              <td>76</td>
              <td>80</td>
              <td>84</td>
              <td>88</td>
              <td>92</td>
            </tr>
          </tbody>
        </table>
        <div className="w-[661px] grid gap-4">
          <p className="text-sm">
            Las medidas anteriores le dan el ancho total de la cintura para cada
            tamaño. Algunos productos pueden variar de estas medidas dependiendo
            del estilo. Solo use esta guía como una herramienta para encontrar
            su tamaño total.
          </p>
          <Link
            className="text-[#564e4c] text-[13px] underline"
            href="/pages/learn-more-about-our-sizes"
          >
            Obtenga más información sobre nuestros tamaños
          </Link>
        </div>
      </main>
    </>
  );
}
