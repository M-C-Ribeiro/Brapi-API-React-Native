import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

function FigInflacao() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetch("https://brapi.dev/api/quote/list?sortBy=change&sortOrder=desc&limit=10&token=eJGEyu8vVHctULdVdHYzQd")
      .then(res => res.json())
      .then(dado => {
        setEmpresas(dado.stocks);
      });
  }, []);

  const acaoNome = empresas.map(acao => acao.name);
  const acaoVariacao = empresas.map(acao => acao.change);

  return (
    <View>
      <Text>Ações mais valorizadas</Text>
      <LineChart
        data={{
          labels: acaoNome,
          datasets: [
            {
              data: acaoVariacao,
              strokeWidth: 2,
            },
          ],
        }}
        width={700}
        height={500}
        
      />
    </View>
  );
}

export default FigInflacao;