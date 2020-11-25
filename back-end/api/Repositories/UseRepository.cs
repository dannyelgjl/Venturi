using System.Collections.Generic;
using System.Linq;
using api.Models;

namespace UseRepository.Repositories
{
  public static class UserRepository
  {
    public static User Get(string name, string avatar, string email, string password)
    {
      var users = new List<User>();
      users.Add(new User { id = 1, name = "Daniel", avatar = "https://avatars1.githubusercontent.com/u/54491980?s=460&u=5457192f7674845b14a107f7791033cfcbabb036&v=4", email = "daniel@venturi.com", password = "daniel" });
      return users
              .Where(x => x.email.ToLower() == email.ToLower() && x.password == password)
                .FirstOrDefault();
    }
  }
}