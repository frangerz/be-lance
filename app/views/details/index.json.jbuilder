json.array!(@details) do |detail|
  json.extract! detail, :id, :type, :value
  json.url detail_url(detail, format: :json)
end
