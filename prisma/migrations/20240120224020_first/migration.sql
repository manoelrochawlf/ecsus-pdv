-- CreateTable
CREATE TABLE "Cliente" (
    "cliente_id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cliente_id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "servico_id" SERIAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "data_servico" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("servico_id")
);

-- CreateTable
CREATE TABLE "Peca" (
    "peca_id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco_unitario" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Peca_pkey" PRIMARY KEY ("peca_id")
);

-- CreateTable
CREATE TABLE "TransacaoFinanceira" (
    "transacao_id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "data_transacao" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "TransacaoFinanceira_pkey" PRIMARY KEY ("transacao_id")
);

-- CreateTable
CREATE TABLE "_ServicosPecas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ServicosPecas_AB_unique" ON "_ServicosPecas"("A", "B");

-- CreateIndex
CREATE INDEX "_ServicosPecas_B_index" ON "_ServicosPecas"("B");

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cliente_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServicosPecas" ADD CONSTRAINT "_ServicosPecas_A_fkey" FOREIGN KEY ("A") REFERENCES "Peca"("peca_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServicosPecas" ADD CONSTRAINT "_ServicosPecas_B_fkey" FOREIGN KEY ("B") REFERENCES "Servico"("servico_id") ON DELETE CASCADE ON UPDATE CASCADE;
