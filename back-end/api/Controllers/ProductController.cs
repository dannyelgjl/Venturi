using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.Models;
using System.Linq;

namespace api.Controllers
{
  [ApiController]
  [Route("v1/products")]
  public class ProductController : ControllerBase
  {
    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Product>>> Get([FromServices] DataContext context)
    {
      var products = await context.Products.Include(x => x.Category).ToListAsync();
      return products;
    }


    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<Product>> GetById([FromServices] DataContext context, int id)
    {
      var product = await context.Products.Include(x => x.Category)
        .AsNoTracking()
        .FirstOrDefaultAsync(x => x.Id == id);
      return product;
    }

    [HttpGet]
    [Route("categories/{id:int}")]
    public async Task<ActionResult<List<Product>>> GetByCategory([FromServices] DataContext context, int id)
    {
      var products = await context.Products
      .Include(x => x.Category)
      .AsNoTracking()
      .Where(x => x.Category.Id == id)
      .ToListAsync();
      return products;
    }


    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Product>> Post(
      [FromServices] DataContext context,
      [FromBody] Product model)
    {
      if (ModelState.IsValid)
      {
        context.Products.Add(model);
        await context.SaveChangesAsync();
        return model;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpPut]
    [Route("")]
    public async Task<ActionResult<Product>> Put(
      [FromServices] DataContext context,
      [FromBody] Product model)
    {
      if (ModelState.IsValid)
      {
        context.Products.Update(model);
        await context.SaveChangesAsync();
        return model;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpDelete]
    [Route("")]
    public async Task<string> Delete(
      [FromServices] DataContext context,
      [FromBody] Product model)
    {
      context.Products.Remove(model);
      await context.SaveChangesAsync();
      return $"Produto deletado: {model.Title}";
    }


  }
}