// Rota para registrar novo produto
router.post('/api', (req, res) => {
    try{
        const { nome, descricao, preco, quantidade_estoque } = req.body;

        // Validação dos campos obrigatórios
        if (!nome || !descricao || !preco || !quantidade_estoque){ return res.status(400).json({ 
            error:"Todos os campos são obrigaórios"
        })}
    } catch(error){

        

    }
    const [result] = await db.query (
        "INSERT INTO ( nome, descricao, preco, quantidade_estoque, createdAt ) VALUES (nome, descricao, preco, quantidade_estoque, NOW()) ",
        [nome, descricao, preco, quantidade_estoque]
    );

    const id = result.insertId;

    res.status(201).json({

        id,
        nome,
        descricao,
        preco: 50,
        quantidade_estoque
    });
    
});

 catch (error) {
    console.error( "Erro ao criar protudo:", error message );
    res.
}