"use client"
import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/sheets`, {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Dados enviados com sucesso!');
        setFormData({
          nome: '',
          email: '',
          mensagem: ''
        });
      } else {
        alert('Erro ao enviar dados');
      }

    } catch (error) {
      console.error('Erro ao enviar:', error);
    }
  };

  return (
    <div className='flex flex-col gap-2 max-w-[480px] mx-auto rounded-xl border shadow-sm bg-slate-800/50 border-cyan-500/20 px-4 py-5'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 justify-center items-start text-white'>
        <label htmlFor="nome" className='text-white font-semibold'>Nome:</label>
        <input className='border border-gray-300 rounded-md p-2 bg-white bg-opacity-80 w-full outline-none text-black h-10 px-2'
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <label htmlFor="email" className='text-white font-semibold'>Email:</label>
        <input className='border border-gray-300 rounded-md p-2 bg-white bg-opacity-80 w-full outline-none text-black h-10 px-2'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <label htmlFor="mensagem" className='text-white font-semibold'>Mensagem:</label>
        <textarea className='border border-gray-300 rounded-md p-2 bg-white bg-opacity-80 w-full outline-none text-black h-20 px-2'
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Mensagem"
        />
        <button className='bg-cyan-500 text-white rounded-md p-2 w-full font-semibold cursor-pointer h-10 transition-all duration-300 mt-2' type="submit">
          Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;