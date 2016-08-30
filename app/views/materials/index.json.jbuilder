json.array!(@materials) do |material|
  json.extract! material, :id, :type, :description, :cost, :quantity
  json.url material_url(material, format: :json)
end
