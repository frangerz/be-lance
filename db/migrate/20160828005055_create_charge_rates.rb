class CreateChargeRates < ActiveRecord::Migration
  def change
    create_table :charge_rates do |t|
      t.string :description
      t.integer :period
      t.integer :cost

      t.timestamps null: false
    end
  end
end
