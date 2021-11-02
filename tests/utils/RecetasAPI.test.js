import RecetasAPI from '../../src/utils/RecetasAPI';

describe('RecetasAPI', () => {
  it('Obtener 0 recetas al limpiar la base de datos', async() => {
    await RecetasAPI.ClearRecetas();
    const recetas = await RecetasAPI.ObtenerRecetas();
    expect(recetas.length).toBe(0);
  });

  it('Obtener 1 recetas al limpiar la base de datos y guardar 1 receta', async () => {
    await RecetasAPI.ClearRecetas();
    const receta = {
      titulo:'Ron',
      ingredientes:'Solo ron',
      descripcion:'Agregar al vaso'
    }
    await RecetasAPI.GuardarRecetas([receta]);
    const recetas = await RecetasAPI.ObtenerRecetas();
    expect(recetas.length).toBe(1);
  });

  it('Limpiar BD, guardar una unica receta, obtener recetas y que sea solo 1', async () => {
    await RecetasAPI.ClearRecetas();
    const receta = {
      titulo: 'Ron',
      ingredientes: 'Solo ron',
      descripcion: 'Agregar al vaso'
    }
    await RecetasAPI.GuardarReceta([receta]);
    const recetas = await RecetasAPI.ObtenerRecetas();
    expect(recetas.length).toBe(1);
  });
});