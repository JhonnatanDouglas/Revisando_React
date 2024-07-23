import { useState } from "react";

interface iProduto {
  id: number;
  nome: string;
  preco: number;
}

const produtos: iProduto[] = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Smartphone", preco: 1500 },
  { id: 3, nome: "Tablet", preco: 1200 },
  { id: 4, nome: "Monitor", preco: 800 },
  { id: 5, nome: "Teclado", preco: 150 },
];

const newAddProduct: iProduto = { id: 6, nome: "Gabinete", preco: 250 };
const newEditProduct: iProduto = { id: 2, nome: "Telefone", preco: 350 };

const GerenciamentoDeListaDeObj_2 = () => {
  const [productsList, setProductList] = useState<iProduto[]>(produtos);

  const addProduct = (product: iProduto) => {
    setProductList([...productsList, product]);
  };

  const removeProduct = (idParam: number) => {
    const newProductList = productsList.filter(
      (product) => product.id !== idParam
    );
    setProductList(newProductList);
  };

  const editProduct = (newProduct: iProduto) => {
    const editedProduct = productsList.map((product) => {
      if (newProduct.id === product.id) {
        return { ...product, ...newProduct }; // Primeiro espalha o produto atual, e depois espalha as modificaçoes que vao substituir o atual
      } else {
        return product;
      }
    });
    setProductList(editedProduct);
  };

  return (
    <>
      <button onClick={() => addProduct(newAddProduct)}>
        Adicionar Produto
      </button>
      <br />
      <button onClick={() => editProduct(newEditProduct)}>
        Editar Produto
      </button>
      <br />
      <br />
      <ul>
        {productsList.map(({ id, nome, preco }) => (
          <li key={id}>
            <h2>Nome: {nome}</h2>
            <p>Preço: {preco}</p>
            <button onClick={() => removeProduct(id)}>Deletar da Lista</button>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GerenciamentoDeListaDeObj_2;
