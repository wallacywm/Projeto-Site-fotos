output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "container_registry_name" {
  value = azurerm_container_registry.example.name
}

output "container_registry_login_server" {
  value = azurerm_container_registry.example.login_server
}

output "private_ssh_key" {
  value     = azapi_resource_action.ssh_public_key_gen.output.privateKey
  sensitive = true
}
