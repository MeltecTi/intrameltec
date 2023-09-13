<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ClientServer;
use App\Models\QuoteServer;
use App\Models\Server;
use Illuminate\Http\Request;

class CreateServerController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        try {
            $client = json_decode($request->json('client'), false);
            $server = json_decode($request->json('serverParts'), false);
            $discount = json_decode($request->json('discount'), false);
            $total = json_decode($request->json('total'), false);
            $yearTotal = json_decode($request->json('yearTotal'), false);

            // Gestion del usuario para crearlo en tabla

            $clientData = [
                'client' => $client->nameClient,
                'email_client' => $client->email,
                'phone' => $client->phone,
                'identification' => $client->identification,
            ];

            $clientPost = new ClientServer($clientData);
            $clientSave = $clientPost->saveOrFail($clientData);

            if (!$clientSave) {
                throw new \Throwable('Error saving client');
            }

            $clientid = $clientPost->id;

            $serverData = [
                'cpu_cores' => $server->cpuCores,
                'ram' => $server->ram,
                'storage' => $server->storage,
                'bandwidth' => $server->bandwidth,
                'os' => $server->so,
                'sqlcore' => $server->sql2core,
                'ip' => $server->ip,
                'rdp' => $server->rdp,
                'users_add_sql' => $server->sql2extra,
                'users_add_rdp' => $server->rdpExtra,
            ];

            $serverPost = new Server($serverData);
            $serverSave = $serverPost->saveOrFail($serverData);

            if (!$serverSave) {
                throw new \Throwable('Error saving server');
            }

            $serverid = $serverPost->id;

            $monts = 0;

            switch ($discount) {
                case 10:
                    $monts = 12;
                    break;

                case 20:
                    $monts = 24;
                    break;

                case 30:
                    $monts = 32;
                    break;

                case 40:
                    $monts = 48;
                    break;

                case 50:

                default:
                    $monts = 0;
                    break;
            }

            $quoteServer = [
                'client_server_id' => $clientid,
                'server_id' => $serverid,
                'discount' => $discount,
                'total_mounth' => $monts,
                'total_amount' => $total,
                'total_year' => $yearTotal,
            ];

            $quotePost = new QuoteServer($quoteServer);
            $quoteSave = $quotePost->saveOrFail($quoteServer);

            if (!$quoteSave) {
                throw new \Throwable('Error saving quote');
            }

                return response()->json([
                'status' => 201,
                'message' => 'Server created successfully',
                ]);

        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }
}
