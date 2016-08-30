json.array!(@bank_details) do |bank_detail|
  json.extract! bank_detail, :id, :type, :service, :description
  json.url bank_detail_url(bank_detail, format: :json)
end
