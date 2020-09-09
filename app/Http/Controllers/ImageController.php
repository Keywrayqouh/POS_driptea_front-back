<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Product;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function formSubmit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'productName' => 'required|string|max:255',
            'productDescription' => 'required|string|max:500',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $imageName);
        $data = $request->all();
        $product = new Product();
        $product->price = $data['price'];
        $product->productName = $data['productName'];
        $product->productDescription = $data['productDescription'];
        $product->image = 'images/'.$imageName;
        $product->save();
        
    	return response()->json(['success'=>'You have successfully upload image.']);
    }

    public function retrieveProduct(){
        $product = Product::get();
        return response()->json(compact('product'));
    }
}
