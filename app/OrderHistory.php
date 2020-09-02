<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderHistory extends Model
{
    protected $fillable = [
        'accountId', 'productId', 'orderNumber', 'orderId', 'status'
    ];
}
