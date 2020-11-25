using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using UseRepository.Repositories;
using api.Services;

namespace api.Controllers
{
  [ApiController]
  [Route("v1/session")]
  public class SessionController : ControllerBase
  {
    [HttpPost]
    [Route("")]
    public async Task<ActionResult<dynamic>> Authenticate([FromBody] User model)
    {
      // Recupera o usuário
      var user = UserRepository.Get(model.name, model.avatar, model.email, model.password);

      // Verifica se o usuário existe
      if (user == null)
        return NotFound(new { message = "Usuário ou senha inválidos" });

      // Gera o Token
      var token = TokenService.GenerateToken(user);

      // Oculta a senha
      user.password = "";

      // Retorna os dados
      return new
      {
        user = user,
        token = token
      };

    }
  }
}