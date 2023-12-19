namespace BackEnd.Configuration
{
  public class KeycloakConfig
  {
    public string Issuer { get; set; }
    public string Audience { get; set; }
    public bool RequireHttpsMetadata { get; set; }
  }
}
