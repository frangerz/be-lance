json.array!(@services) do |service|
  json.extract! service, :id, :location, :mobile, :title, :description, :experience, :materials, :speed, :cost_quality
  json.url service_url(service, format: :json)
end
