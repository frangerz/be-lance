json.array!(@company_details) do |company_detail|
  json.extract! company_detail, :id, :type, :company_name, :abn, :acn, :description
  json.url company_detail_url(company_detail, format: :json)
end
