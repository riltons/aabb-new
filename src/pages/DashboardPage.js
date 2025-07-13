import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      
      if (!session) {
        navigate('/login');
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    };
    
    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1>Painel Principal AABB</h1>
        <button 
          onClick={handleLogout}
          style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}
        >
          Sair
        </button>
      </div>
      
      <div style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8, marginBottom: 16 }}>
        <h2>Bem-vindo!</h2>
        <p>Email: {user?.email}</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        <div style={{ backgroundColor: '#e3f2fd', padding: 16, borderRadius: 8 }}>
          <h3>Gerenciar Sócios</h3>
          <p>Cadastre e gerencie os sócios da AABB</p>
        </div>
        
        <div style={{ backgroundColor: '#e8f5e9', padding: 16, borderRadius: 8 }}>
          <h3>Reservas</h3>
          <p>Gerencie reservas de espaços e recursos</p>
        </div>
        
        <div style={{ backgroundColor: '#fff3e0', padding: 16, borderRadius: 8 }}>
          <h3>Eventos</h3>
          <p>Calendário e organização de eventos</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
