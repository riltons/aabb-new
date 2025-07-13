import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { nome } }
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Cadastro realizado! Verifique seu e-mail para ativar a conta.');
      setEmail('');
      setPassword('');
      setNome('');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 32 }}>
      <h2>Criar Conta</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 12 }}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 12 }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 12 }}
        />
        <button type="submit" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        {success && <div style={{ color: 'green', marginTop: 8 }}>{success}</div>}
      </form>
      <p style={{ textAlign: 'center', marginTop: 16 }}>
        Já tem uma conta? <a href="/login" style={{ color: '#0066cc' }}>Faça login</a>
      </p>
    </div>
  );
}

export default RegisterPage;
