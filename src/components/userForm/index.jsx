export function UserForm({data, updateFieldHandle}) {
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
          value={data.name || ""}
          onChange={(e) => updateFieldHandle("name", e.target.value)}
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
          value={data.email || ""}
          onChange={(e) => updateFieldHandle("email", e.target.value)}
        />
      </div>
    </div>
  )
}
