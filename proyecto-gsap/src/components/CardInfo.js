// components/CardInfo.js
export default function CardInfo({ onClose }) {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 12,
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '350px',
        maxWidth: '90%',
        textAlign: 'center',
      }}>
        <h2>Bienvenido a Rio de Janeiro</h2>
        <p>we're gonna go on a little adventure</p>
        <img 
          src='images/cristo.jpg'
          alt="Rio de Janeiro" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} 
        />
        <button 
          onClick={onClose}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ffcc00',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '16px',
          }}>
          Cerrar
        </button>
      </div>
    );
  }
  