# API em Typescript

## Funcionamento geral

Um usuário pode se cadastrar enviando as informações necessárias e requisitar seu Token. Com o Token ele também pode ver suas próprias informações, alterá-las ou excluir seu próprio usuário. Além disso todo usuário com um Token pode cadastrar um endereço, listar todos os endereços, ou buscar, editar e excluir um endereço específico. 

## Configurações iniciais

No arquivo src/database.ts colocar as informações de conexão com o banco de dados postgres da máquina. Executar através do comando:

```npm run dev```

## Endpoints

### POST /signup 

Cadastrar um usuário.

### GET /signin/id

Obtém o token do usuário com ID correspondente.

### GET /user

Usuário vê suas próprias informações.

### PUT /user

Usuário atualiza suas próprias informações.

### DELETE /user

Usuário remove seu próprio cadastro do banco de dados.

### POST /address

Cadastrar um endereço.

### GET /addresses

Listar todos os endereços cadastrados.

### GET /address/id

Ver as informações de um endereço especificado pelo ID.

### PUT /address/id

Editar as informações de um endereço especificado pelo ID.

### DELETE /address/id

Remover um endereço especificado pelo ID do banco de dados.



