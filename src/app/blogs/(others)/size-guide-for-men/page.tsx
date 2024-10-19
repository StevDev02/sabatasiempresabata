import Link from "next/link";

export default function SizeGuideForMenPage() {
  return (
    <main className="h-[170dvh] mt-16 w-full grid place-items-center text-chocolate">
      <div className="w-[661px] grid gap-4">
        <h1 className="text-3xl font-bold">Guía de tallas para Hombres</h1>
        <p className="text-sm">
          Use los gráficos a continuación para encontrar el mejor tamaño para
          usted. Si necesita más ayuda, no dude en ponerse en contacto con
          nuestro equipo de servicio al cliente en: info@elvine.se. Nuestros
          tamaños se basan en una guía general europea de tallas.
        </p>
      </div>
      <table className="text-sm w-[680px]">
        <thead>
          <tr className="grid ml-6 pb-6 text-end grid-cols-9">
            <th className="text-transparent"></th>
            <th>XS</th>
            <th className="-translate-x-1">S</th>
            <th className="translate-x-1">M</th>
            <th className="translate-x-1">L</th>
            <th className="translate-x-3">XL</th>
            <th className="translate-x-5">XXL</th>
            <th className="translate-x-7">XXXL</th>
          </tr>
        </thead>
        <tbody className="grid">
          <tr className="grid grid-cols-9 bg-[#ededee] h-[53px] items-center">
            <td className="translate-x-8">A. Pecho (cm)</td>
            <td></td>
            <td>84</td>
            <td>90</td>
            <td>96</td>
            <td>102</td>
            <td>108</td>
            <td>114</td>
            <td>120</td>
          </tr>
          <tr className="grid grid-cols-9 h-[53px] items-center">
            <td className="translate-x-8">B. Cintura (cm)</td>
            <td></td>
            <td>72</td>
            <td>78</td>
            <td>84</td>
            <td>90</td>
            <td>96</td>
            <td>102</td>
            <td>108</td>
          </tr>
          <tr className="grid grid-cols-9 bg-[#ededee] h-[53px] items-center">
            <td className="translate-x-8">C. Asiento (cm)</td>
            <td></td>
            <td>88</td>
            <td>94</td>
            <td>100</td>
            <td>106</td>
            <td>112</td>
            <td>118</td>
            <td>124</td>
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
              A. Mida alrededor de la parte más completa del pecho.
            </p>
          </li>
          <li>
            <p className="text-sm">
              B. Mida alrededor de la cintura natural en la parte más pequeña de
              la cintura.
            </p>
          </li>
          <li>
            <p className="text-sm">
              C. De pie con las piernas juntas, mida alrededor de la parte más
              completa del asiento.
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
          <tr className="grid grid-cols-12 h-[53px] items-center">
            <td className="translate-x-8"></td>
            <td></td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td>32</td>
            <td>33</td>
            <td>34</td>
            <td>36</td>
          </tr>

          <tr className="grid grid-cols-12 bg-[#ededee] h-[53px] items-center">
            <td className="translate-x-8">Cintura (cm)</td>
            <td></td>
            <td>75</td>
            <td>77,5</td>
            <td>80</td>
            <td>82,5</td>
            <td>85</td>
            <td>87,5</td>
            <td>90</td>
            <td>92,5</td>
            <td>97</td>
          </tr>
        </tbody>
      </table>
      <div className="w-[661px] grid gap-4">
        <p className="text-sm">
          La mayoría de nuestros pantalones están fabricados en pulgadas. Las
          medidas anteriores le dan el ancho total de la cintura para cada
          tamaño. Algunos productos pueden variar de estas medidas dependiendo
          del estilo. Solo use esta guía como una herramienta para encontrar su
          tamaño total.
        </p>
        <Link
          className="text-[#564e4c] text-[13px] underline"
          href="/pages/learn-more-about-our-sizes"
        >
          Obtenga más información sobre nuestros tamaños
        </Link>
      </div>
    </main>
  );
}
