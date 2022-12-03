export function UserForm() {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite o seu email"
          required
        />
      </div>
    </div>
  )
}
