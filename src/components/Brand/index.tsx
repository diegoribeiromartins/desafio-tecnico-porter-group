import React, { useState } from "react";

import colorsConfig from "../../config/colors";

type colorsType = "primary" | "secondary" | "dark" | "medium" | "white";

interface BrandType {
  color?: colorsType;
}

const Brand: React.FC<BrandType> = ({ color = "white", ...props }) => {
  const colors = {
    primary: colorsConfig.primary,
    secondary: colorsConfig.secondary,
    dark: "#101e30",
    medium: "#707070",
    white: "#FFFFFF",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="porter-group"
      width="100%"
      viewBox="0 0 181.17 53.207"
    >
      <path
        id="Caminho_195"
        data-name="Caminho 195"
        d="M84.633,9269.244l12.66-7.31v-14.62l-12.66,7.311Z"
        transform="translate(-59.594 -9227.233)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_196"
        data-name="Caminho 196"
        d="M64.392,9261.935l12.662,7.31v-14.619l-12.662-7.311Z"
        transform="translate(-54.741 -9227.233)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_197"
        data-name="Caminho 197"
        d="M78.847,9234.594,66.185,9241.9l12.662,7.309,12.66-7.309Z"
        transform="translate(-55.171 -9224.185)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_198"
        data-name="Caminho 198"
        d="M96.675,9232.467l-18.929-10.93a4.753,4.753,0,0,0-4.747,0l-18.929,10.93a4.747,4.747,0,0,0-2.373,4.109v21.857a4.743,4.743,0,0,0,2.373,4.109L73,9273.474a4.749,4.749,0,0,0,4.747,0l18.929-10.931a4.743,4.743,0,0,0,2.374-4.109v-21.857A4.746,4.746,0,0,0,96.675,9232.467Zm-4.552,23.922a1.359,1.359,0,0,1-.687,1.181l-15.382,8.885a1.366,1.366,0,0,1-1.364,0L59.3,9257.569a1.36,1.36,0,0,1-.687-1.181v-17.773a1.35,1.35,0,0,1,.687-1.179l15.387-8.885a1.376,1.376,0,0,1,1.364,0l15.387,8.885a1.151,1.151,0,0,1,.151.1,1.361,1.361,0,0,1,.531,1.079Z"
        transform="translate(-51.698 -9220.902)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_199"
        data-name="Caminho 199"
        d="M218,9269.951a4.164,4.164,0,0,1-1.2-3.041,4.054,4.054,0,0,1,1.253-3.064,4.177,4.177,0,0,1,3.03-1.224,4.684,4.684,0,0,1,1.957.425,3.992,3.992,0,0,1,1.488,1.107l-.493.447a3.85,3.85,0,0,0-2.952-1.318,3.535,3.535,0,0,0-3.6,3.474c0,.052,0,.1,0,.153a3.531,3.531,0,0,0,1.007,2.582,3.374,3.374,0,0,0,2.528,1.02,4.175,4.175,0,0,0,3.075-1.365v-1.935H220.8v-.638h3.962v2.829a4.755,4.755,0,0,1-3.747,1.755A4.061,4.061,0,0,1,218,9269.951Z"
        transform="translate(-91.281 -9230.903)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_200"
        data-name="Caminho 200"
        d="M239.331,9271.085l-2.114-3.491h-1.656v3.491h-.687v-8.266h2.5a2.519,2.519,0,0,1,1.934.715,2.346,2.346,0,0,1-1.365,3.99l2.215,3.557Zm-3.769-7.616v3.479h1.656c1.342,0,2.069-.718,2.069-1.756a1.709,1.709,0,0,0-1.9-1.723Z"
        transform="translate(-95.614 -9230.951)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_201"
        data-name="Caminho 201"
        d="M249.675,9269.941a4.309,4.309,0,0,1,.013-6.042,4.256,4.256,0,1,1-.013,6.042Zm5.536-.459a3.708,3.708,0,0,0,0-5.133,3.355,3.355,0,0,0-2.516-1.051,3.4,3.4,0,0,0-2.527,1.063,3.706,3.706,0,0,0,0,5.121A3.569,3.569,0,0,0,255.211,9269.482Z"
        transform="translate(-98.868 -9230.915)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_202"
        data-name="Caminho 202"
        d="M267.027,9262.819h.686v5.468a2.113,2.113,0,1,0,4.216,0v-5.468h.687v5.581a2.813,2.813,0,0,1-.761,2.08,2.74,2.74,0,0,1-2.024.749,2.608,2.608,0,0,1-2.8-2.829Z"
        transform="translate(-103.323 -9230.951)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_203"
        data-name="Caminho 203"
        d="M285.069,9262.818a2.469,2.469,0,0,1,1.957.749,2.557,2.557,0,0,1,.687,1.778,2.492,2.492,0,0,1-.715,1.785,2.661,2.661,0,0,1-2.024.738h-1.767v3.209h-.687v-8.264Zm-.089,4.418a1.87,1.87,0,0,0,2.034-1.9,1.79,1.79,0,0,0-1.912-1.867h-1.9v3.77Z"
        transform="translate(-107.037 -9230.95)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_204"
        data-name="Caminho 204"
        d="M150.709,9243.88c0,3.938-3.112,5.8-7.833,5.8h-4.834v4.073h-6.266v-15.666h11.1C147.6,9238.083,150.709,9239.94,150.709,9243.88Zm-6.316.179c0-1.209-.872-1.678-2.036-1.678h-4.315v3.356h4.319c1.165,0,2.037-.47,2.037-1.679Z"
        transform="translate(-70.897 -9225.021)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_205"
        data-name="Caminho 205"
        d="M157.472,9245.745c0-5.394,4.3-8.375,10.653-8.375s10.653,2.977,10.653,8.375-4.3,8.375-10.653,8.375S157.472,9251.139,157.472,9245.745Zm14.95,0c0-2.238-1.611-3.581-4.3-3.581s-4.3,1.343-4.3,3.581,1.612,3.581,4.3,3.581S172.422,9247.983,172.422,9245.745Z"
        transform="translate(-77.057 -9224.85)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_206"
        data-name="Caminho 206"
        d="M200.146,9253.749l-3.513-4.3h-2.8v4.3h-6.221v-15.666h11.259c4.342,0,7.856,1.785,7.856,5.685a5.164,5.164,0,0,1-3.761,5.035l4.257,4.942Zm-6.315-8.238h4.5c1.208,0,2.06-.4,2.06-1.566s-.851-1.566-2.06-1.566h-4.492Z"
        transform="translate(-84.284 -9225.021)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_207"
        data-name="Caminho 207"
        d="M231.276,9242.672h-5.9v11.077H219.1v-11.077h-5.911v-4.589h18.083Z"
        transform="translate(-90.416 -9225.021)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_208"
        data-name="Caminho 208"
        d="M256.306,9249.407v4.342h-17.68v-15.666h17.437v4.341h-11.3v1.456h9.086v3.894h-9.086v1.634Z"
        transform="translate(-96.514 -9225.021)"
        fill={colors[color]}
      ></path>
      <path
        id="Caminho_209"
        data-name="Caminho 209"
        d="M276.738,9253.749l-3.513-4.3h-2.8v4.3h-6.222v-15.666h11.258c4.342,0,7.855,1.785,7.855,5.685a5.163,5.163,0,0,1-3.759,5.035l4.256,4.942Zm-6.315-8.238h4.5c1.209,0,2.06-.4,2.06-1.566s-.85-1.566-2.06-1.566h-4.492Z"
        transform="translate(-102.646 -9225.021)"
        fill={colors[color]}
      ></path>
    </svg>
  );
};

export default Brand;
