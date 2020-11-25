using System.ComponentModel.DataAnnotations;


namespace api.Models
{
  public class Category
  {
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
    [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]

    public string Title { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(999999999, ErrorMessage = "Este campo deve conter no máximo 999999999 caracteres")]
    public string Image { get; set; }
  }
}